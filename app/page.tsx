'use client';

import { CalendarDays, ChevronLeft, ChevronRight, Clock, Heart, MapPin, Navigation } from 'lucide-react';
import { useCallback, useEffect, useState } from 'react';
import { EventAssistant } from '@/components/event-assistant';

const stories = [
  { year: '2021', kicker: 'The first hello', title: 'Where our story began', copy: 'We met in college — two lives crossing at exactly the right time.', tone: 'rose' },
  { year: 'Chapter II', kicker: 'Easy conversations', title: 'From classmates to friends', copy: 'Ordinary college days slowly became the memories we returned to most.', tone: 'sage' },
  { year: 'Chapter III', kicker: 'Something beautiful', title: 'A friendship became more', copy: 'In laughter, kindness and quiet understanding, we found home in each other.', tone: 'amber' },
  { year: 'Now', kicker: 'The next chapter', title: 'Together, always', copy: 'With full hearts and our families beside us, we are ready to celebrate.', tone: 'plum' },
];

export default function Home() {
  const [activeStory, setActiveStory] = useState(0);
  const [paused, setPaused] = useState(false);
  const goTo = useCallback((index: number) => setActiveStory((index + stories.length) % stories.length), []);

  useEffect(() => {
    if (paused) return;
    const timer = window.setInterval(() => setActiveStory((current) => (current + 1) % stories.length), 6000);
    return () => window.clearInterval(timer);
  }, [paused]);

  return (
    <main>
      <section className="hero" id="home">
        <nav className="nav shell" aria-label="Main navigation">
          <a className="monogram" href="#home" aria-label="Samiksha and Chinmay, home">S<span>&amp;</span>C</a>
          <a className="nav-link" href="#story">Our story</a>
        </nav>
        <div className="hero-copy shell">
          <p className="eyebrow">With joyful hearts, we invite you to celebrate</p>
          <div className="hero-names"><h1>Samiksha</h1><span className="hero-ampersand">&amp;</span><h1>Chinmay</h1></div>
          <p className="hero-subtitle">are getting engaged</p>
          <div className="date-pill"><span>Date to be announced</span><i /><span>Save our celebration</span></div>
          <a className="primary-button" href="#story">Begin our story <ChevronRight size={18} aria-hidden="true" /></a>
        </div>
        <figure className="hero-photo" aria-label="Placeholder for Samiksha and Chinmay's couple photograph">
          <div className="photo-label"><Heart size={18} fill="currentColor" /> Couple photo</div>
        </figure>
        <span className="scroll-note">Scroll to celebrate <span>↓</span></span>
      </section>

      <section className="couple-section shell" aria-labelledby="couple-title">
        <div className="section-heading"><p className="eyebrow">Two hearts, one promise</p><h2 id="couple-title">Meet the couple</h2><span className="flourish">✦</span></div>
        <div className="couple-grid">
          <article className="person-card">
            <figure className="portrait portrait-bride" aria-label="Placeholder portrait for Samiksha Naidu"><span>SN</span><small>Photo coming soon</small></figure>
            <p className="role">The bride</p><h3>Samiksha Naidu</h3>
            <p className="parent-line">Daughter of Gopal Swami Naidu &amp; Indrani Naidu</p>
            <p>Warm-hearted, wonderfully curious, and ready for a lifetime of shared adventures.</p>
          </article>
          <div className="heart-divider"><Heart size={22} fill="currentColor" aria-hidden="true" /></div>
          <article className="person-card">
            <figure className="portrait portrait-groom" aria-label="Placeholder portrait for Chinmay Nayek"><span>CN</span><small>Photo coming soon</small></figure>
            <p className="role">The groom</p><h3>Chinmay Nayek</h3>
            <p className="parent-line">His family introduction will be added here</p>
            <p>Thoughtful, joyful, and looking forward to building a beautiful life together.</p>
          </article>
        </div>
      </section>

      <section className="story-section" id="story" aria-labelledby="story-title">
        <div className="section-heading shell light-heading"><p className="eyebrow">It started in college</p><h2 id="story-title">Our little love story</h2></div>
        <div className={`story-card tone-${stories[activeStory].tone}`} onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onPointerDown={() => setPaused(true)} onPointerUp={() => setPaused(false)}>
          <div className="story-progress" aria-label={`Story ${activeStory + 1} of ${stories.length}`}>
            {stories.map((story, index) => <button key={story.title} onClick={() => goTo(index)} aria-label={`Open story ${index + 1}`}><span className={index <= activeStory ? 'filled' : ''} /></button>)}
          </div>
          <div className="story-visual" aria-hidden="true"><span>{stories[activeStory].year}</span><small>Story photo placeholder</small></div>
          <div className="story-content" aria-live="polite"><p>{stories[activeStory].kicker}</p><h3>{stories[activeStory].title}</h3><blockquote>“{stories[activeStory].copy}”</blockquote></div>
          <button className="story-arrow previous" onClick={() => goTo(activeStory - 1)} aria-label="Previous story"><ChevronLeft /></button>
          <button className="story-arrow next" onClick={() => goTo(activeStory + 1)} aria-label="Next story"><ChevronRight /></button>
          <button className="pause-control" onClick={() => setPaused((value) => !value)}>{paused ? 'Play stories' : 'Pause stories'}</button>
        </div>
        <a className="details-preview" href="#details"><MapPin aria-hidden="true" /><span><strong>Celebration details</strong><small>Date, timings &amp; venue coming next</small></span><ChevronRight aria-hidden="true" /></a>
      </section>

      <section className="details-section shell" id="details" aria-labelledby="details-title">
        <div className="section-heading"><p className="eyebrow">Come celebrate with us</p><h2 id="details-title">The celebration</h2><span className="flourish">✦</span></div>
        <div className="details-grid">
          <article className="schedule-card">
            <div className="card-heading"><CalendarDays aria-hidden="true" /><div><p className="role">Save the date</p><h3>Date to be announced</h3></div></div>
            <div className="timeline">
              <div><Clock aria-hidden="true" /><span><strong>Guest welcome</strong><small>Time to be announced</small></span></div>
              <div><Heart aria-hidden="true" /><span><strong>Ring ceremony</strong><small>Time to be announced</small></span></div>
              <div><span className="dinner-mark">✦</span><span><strong>Dinner &amp; celebration</strong><small>Time to be announced</small></span></div>
            </div>
          </article>
          <article className="venue-card">
            <div className="venue-art"><MapPin size={46} aria-hidden="true" /><span>Venue</span></div>
            <div className="venue-copy"><p className="role">Where to find us</p><h3>Venue to be announced</h3><p>The full address and a verified directions link will be added as soon as the venue is confirmed.</p>
              <a className="map-button" href="https://www.google.com/maps/search/?api=1&query=Engagement+venue" target="_blank" rel="noreferrer"><Navigation size={17} aria-hidden="true" /> Open Maps</a>
            </div>
          </article>
        </div>
      </section>

      <section className="assistant-section" id="assistant" aria-labelledby="assistant-title">
        <div className="section-heading shell"><p className="eyebrow">Helpful, private &amp; on-device</p><h2 id="assistant-title">Have a question?</h2></div>
        <EventAssistant />
      </section>

      <footer><Heart size={18} fill="currentColor" aria-hidden="true" /><p>With love,</p><h2>Samiksha &amp; Chinmay</h2><small>We can’t wait to celebrate with you</small></footer>
    </main>
  );
}
