'use client';

import { CalendarDays, ChevronLeft, ChevronRight, Clock, Heart, MapPin, Navigation } from 'lucide-react';
import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';
import chinmayPortrait from '@/public/chinmay-portrait.jpg';
import chinmaySeated from '@/public/chinmay-seated.jpg';
import samikshaCandid from '@/public/samiksha-candid.jpg';
import samikshaChinmayCouple from '@/public/samiksha-chinmay-couple.jpg';
import samikshaPortrait from '@/public/samiksha-portrait.jpg';

const stories = [
  { year: '2021', kicker: 'The first hello', title: 'Where our story began', copy: 'We met in college — two lives crossing at exactly the right time.', tone: 'rose', image: samikshaChinmayCouple, imageAlt: 'Samiksha and Chinmay together at their celebration' },
  { year: 'Chapter II', kicker: 'Easy conversations', title: 'From classmates to friends', copy: 'Ordinary college days slowly became the memories we returned to most.', tone: 'sage', image: samikshaCandid, imageAlt: 'Samiksha smiling in a blue saree' },
  { year: 'Chapter III', kicker: 'Something beautiful', title: 'A friendship became more', copy: 'In laughter, kindness and quiet understanding, we found home in each other.', tone: 'amber', image: chinmaySeated, imageAlt: 'Chinmay smiling in traditional attire' },
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
          <div className="date-pill"><span>4th December</span><i /><span>11:00 AM</span></div>
          <a className="primary-button" href="#story">Begin our story <ChevronRight size={18} aria-hidden="true" /></a>
        </div>
        <span className="scroll-note">Scroll to celebrate <span>↓</span></span>
      </section>

      <section className="couple-section shell" aria-labelledby="couple-title">
        <div className="section-heading"><p className="eyebrow">Two hearts, one promise</p><h2 id="couple-title">Meet the couple</h2><span className="flourish">✦</span></div>
        <div className="couple-grid">
          <article className="person-card">
            <figure className="portrait portrait-bride"><Image src={samikshaPortrait} alt="Samiksha Naidu wearing a blue saree" fill sizes="(max-width: 720px) 90vw, 405px" unoptimized /></figure>
            <p className="role">The bride</p><h3>Samiksha Naidu</h3>
            <p className="parent-line">Daughter of Gopal Swami Naidu &amp; Indrani Naidu</p>
            <p>Warm-hearted, wonderfully curious, and ready for a lifetime of shared adventures.</p>
          </article>
          <div className="heart-divider"><Heart size={22} fill="currentColor" aria-hidden="true" /></div>
          <article className="person-card">
            <figure className="portrait portrait-groom"><Image src={chinmayPortrait} alt="Chinmay Nayak wearing traditional ivory attire" fill sizes="(max-width: 720px) 90vw, 405px" unoptimized /></figure>
            <p className="role">The groom</p><h3>Chinmay Nayak</h3>
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
          <div className="story-visual"><Image src={stories[activeStory].image} alt={stories[activeStory].imageAlt} fill sizes="(max-width: 460px) 100vw, 430px" unoptimized /><span>{stories[activeStory].year}</span></div>
          <div className="story-content" aria-live="polite"><p>{stories[activeStory].kicker}</p><h3>{stories[activeStory].title}</h3><blockquote>“{stories[activeStory].copy}”</blockquote></div>
          <button className="story-arrow previous" onClick={() => goTo(activeStory - 1)} aria-label="Previous story"><ChevronLeft /></button>
          <button className="story-arrow next" onClick={() => goTo(activeStory + 1)} aria-label="Next story"><ChevronRight /></button>
          <button className="pause-control" onClick={() => setPaused((value) => !value)}>{paused ? 'Play stories' : 'Pause stories'}</button>
        </div>
        <a className="details-preview" href="#details"><MapPin aria-hidden="true" /><span><strong>Celebration details</strong><small>4th December · 11:00 AM</small></span><ChevronRight aria-hidden="true" /></a>
      </section>

      <section className="details-section shell" id="details" aria-labelledby="details-title">
        <div className="section-heading"><p className="eyebrow">Come celebrate with us</p><h2 id="details-title">The celebration</h2><span className="flourish">✦</span></div>
        <div className="details-grid">
          <article className="schedule-card">
            <div className="card-heading"><CalendarDays aria-hidden="true" /><div><p className="role">Save the date</p><h3>4th December</h3></div></div>
            <div className="timeline">
              <div><Clock aria-hidden="true" /><span><strong>Guest welcome</strong><small>11:00 AM</small></span></div>
              <div><Heart aria-hidden="true" /><span><strong>Ring ceremony</strong><small>Followed by blessings</small></span></div>
              <div><span className="dinner-mark">✦</span><span><strong>Lunch at the temple</strong><small>Following the ceremony</small></span></div>
            </div>
          </article>
          <article className="venue-card">
            <div className="venue-art"><MapPin size={46} aria-hidden="true" /><span>Patia · Bhubaneswar</span></div>
            <div className="venue-copy"><p className="role">Where to find us</p><h3>PARK Selections</h3><p>Plot No. 100, KIIT Road, near Falcon Marine Exports, Chandaka Industrial Estate, Patia, Bhubaneswar, Odisha 751024.</p>
              <a className="map-button" href="https://share.google/kzAdMG09a8dN4oC0C" target="_blank" rel="noreferrer"><Navigation size={17} aria-hidden="true" /> Open in Google Maps</a>
            </div>
          </article>
        </div>
      </section>

      <footer><Heart size={18} fill="currentColor" aria-hidden="true" /><p>With love,</p><h2>Samiksha &amp; Chinmay</h2><small>We can’t wait to celebrate with you</small></footer>
    </main>
  );
}
