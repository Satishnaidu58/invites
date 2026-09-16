'use client';

import type { MLCEngine } from '@mlc-ai/web-llm';
import { Bot, Download, LoaderCircle, Send, ShieldCheck, Sparkles } from 'lucide-react';
import { SyntheticEvent, useRef, useState } from 'react';

const MODEL_ID = 'SmolLM2-360M-Instruct-q4f16_1-MLC';
const EVENT_CONTEXT = `
You are the private engagement guide for Samiksha Naidu and Chinmay Nayek.
Known facts only:
- Samiksha Naidu is the daughter of Gopal Swami Naidu and Indrani Naidu.
- The groom is Chinmay Nayek.
- They met in college in 2021.
- The engagement date, function times, venue, address, maps link, RSVP, dress code, and groom's family details are not confirmed yet.
Answer warmly and very briefly. Never invent missing details. If information is unconfirmed, say it will be shared soon.
`;

type Message = { role: 'user' | 'assistant'; text: string };

export function EventAssistant() {
  const engine = useRef<MLCEngine | null>(null);
  const [status, setStatus] = useState<'idle' | 'loading' | 'ready' | 'unsupported' | 'error'>('idle');
  const [progress, setProgress] = useState('');
  const [input, setInput] = useState('');
  const [busy, setBusy] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', text: 'Hello! I can help with Samiksha and Chinmay’s celebration.' },
  ]);

  async function startModel() {
    if (!('gpu' in navigator)) {
      setStatus('unsupported');
      return;
    }
    try {
      setStatus('loading');
      const webllm = await import('@mlc-ai/web-llm');
      engine.current = await webllm.CreateMLCEngine(MODEL_ID, {
        initProgressCallback: (report) => setProgress(report.text),
      });
      setStatus('ready');
      setProgress('Model ready — conversations stay on this device.');
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  }

  async function ask(event: SyntheticEvent<HTMLFormElement>) {
    event.preventDefault();
    const question = input.trim();
    if (!question || !engine.current || busy) return;
    setInput('');
    setBusy(true);
    setMessages((current) => [...current, { role: 'user', text: question }]);
    try {
      const response = await engine.current.chat.completions.create({
        messages: [
          { role: 'system', content: EVENT_CONTEXT },
          ...messages.slice(-4).map((message) => ({ role: message.role, content: message.text })),
          { role: 'user', content: question },
        ],
        temperature: 0.2,
        max_tokens: 100,
      });
      const answer = response.choices[0]?.message.content || 'That detail will be shared soon.';
      setMessages((current) => [...current, { role: 'assistant', text: answer }]);
    } catch (error) {
      console.error(error);
      setMessages((current) => [...current, { role: 'assistant', text: 'I had trouble answering. Please try again.' }]);
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="assistant-card">
      <div className="assistant-intro">
        <span className="assistant-icon"><Sparkles aria-hidden="true" /></span>
        <div><p className="role">Private event guide</p><h3>Ask about the celebration</h3></div>
      </div>
      <p className="assistant-description">A tiny AI model runs directly in your browser. After its one-time download, questions are answered on your device.</p>

      {status !== 'ready' ? (
        <div className="model-start">
          <button className="primary-button assistant-button" onClick={startModel} disabled={status === 'loading'}>
            {status === 'loading' ? <LoaderCircle className="spin" aria-hidden="true" /> : <Download aria-hidden="true" />}
            {status === 'loading' ? 'Preparing local AI…' : status === 'error' ? 'Try loading again' : 'Start private AI'}
          </button>
          {progress && <p className="model-status" aria-live="polite">{progress}</p>}
          {status === 'unsupported' && <p className="model-warning">This browser does not support WebGPU. The invitation details above are still available.</p>}
          {status === 'error' && <p className="model-warning">The model could not load. Check your connection and available device memory, then retry.</p>}
        </div>
      ) : (
        <div className="chat-shell">
          <div className="privacy-note"><ShieldCheck size={15} aria-hidden="true" /> Running locally on this device</div>
          <div className="messages" aria-live="polite">
            {messages.map((message, index) => <p key={`${message.role}-${index}`} className={`message ${message.role}`}><Bot size={15} aria-hidden="true" />{message.text}</p>)}
            {busy && <p className="message assistant"><LoaderCircle className="spin" size={15} aria-hidden="true" />Thinking…</p>}
          </div>
          <form onSubmit={ask} className="chat-form">
            <label className="sr-only" htmlFor="event-question">Ask a question about the event</label>
            <input id="event-question" value={input} onChange={(event) => setInput(event.target.value)} placeholder="How did they meet?" disabled={busy} />
            <button type="submit" aria-label="Send question" disabled={!input.trim() || busy}><Send size={18} /></button>
          </form>
        </div>
      )}
    </div>
  );
}
