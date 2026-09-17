# Samiksha & Chinmay — Engagement Invitation

A warm, mobile-first digital engagement invitation for **Samiksha Naidu** and **Chinmay Nayek**. The experience introduces the couple, shares their story through an automatically advancing story slider, and gives guests quick access to the event schedule and venue.

> This README is the initial product and implementation brief. Dates, times, venue details, final copy, and photographs are placeholders until confirmed.

## The Couple

### Samiksha Naidu — The Bride

**Daughter of Gopal Swami Naidu and Indrani Naidu**

Add a short, personal introduction here—for example, her interests, personality, profession, and what she is most looking forward to as she begins this new chapter.

**Photo:** Use a portrait placeholder until the final bride photograph is available.

### Chinmay Nayek — The Groom

Add a short, personal introduction here—for example, his interests, personality, profession, and what he is most looking forward to as he begins this new chapter.

**Photo:** Use a portrait placeholder until the final groom photograph is available.

## Their Story

The couple met in college in **2021**. Their journey should be presented as a short, visual story made up of full-screen or card-style slides.

Suggested story sequence:

1. **2021 — The First Meeting**  
   Samiksha and Chinmay met in college, where their story quietly began.

2. **From Classmates to Friends**  
   Conversations became friendship, and ordinary college days turned into cherished memories.

3. **A Friendship Becomes More**  
   Over time, they discovered a connection that felt natural, joyful, and lasting.

4. **The Next Chapter**  
   Surrounded by their families and friends, they are ready to celebrate their engagement.

5. **You Are Invited**  
   Join Samiksha and Chinmay as they begin this beautiful new chapter together.

All story copy is provisional and should be reviewed by the couple before publishing.

## Core Experience

- Mobile-first, responsive layout that also feels complete on tablets and desktop screens.
- Hero section with the couple's names, engagement announcement, date, and a clear invitation message.
- Individual bride and groom sections with portrait photos and short introductions.
- Instagram-story-inspired slider with photographs, captions, progress indicators, and smooth transitions.
- Automatic story advancement on mobile, with pause/resume support and manual swipe navigation.
- Previous/next controls and keyboard navigation on desktop.
- Event schedule with function names and timings.
- Venue card with address and a button that opens the location in Google Maps or the device's preferred maps app.
- Optional countdown to the engagement.
- Accessible typography, controls, motion preferences, and colour contrast.

## Story Slider Behaviour

The story is the centrepiece of the mobile experience.

- Advance automatically every **5–7 seconds**.
- Show a segmented progress bar at the top.
- Allow swipe left/right on touch devices.
- Allow tap zones for previous/next navigation.
- Pause while the user presses and holds, hovers on desktop, opens a dialog, or switches browser tabs.
- Resume from the current slide instead of restarting.
- Use a soft fade, slide, or subtle zoom transition between slides.
- Respect `prefers-reduced-motion` and provide a non-animated experience when requested.
- Keep captions readable over every image using a gradient overlay.
- Avoid trapping the user in the slider; all event details must remain reachable by normal page scrolling.

## Event Details

Replace the following placeholders after the arrangements are confirmed:

| Detail | Information |
| --- | --- |
| Event | Engagement Ceremony |
| Date | To be announced |
| Guest arrival | To be announced |
| Ceremony | To be announced |
| Celebration / dinner | To be announced |
| Venue | PARK Selections |
| Address | Plot No. 100, KIIT Road, near Falcon Marine Exports, Chandaka Industrial Estate, Patia, Bhubaneswar, Odisha 751024 |
| Maps link | https://share.google/kzAdMG09a8dN4oC0C |

The location button should open an external maps URL in a new tab. On mobile, the link may open the guest's installed maps application.

Example:

```html
<a
  href="https://www.google.com/maps/search/?api=1&query=VENUE_NAME_AND_ADDRESS"
  target="_blank"
  rel="noreferrer"
>
  Open in Maps
</a>
```

## Responsive Design Direction

### Mobile

- Optimise first for widths from **320 px to 480 px**.
- Use a single-column layout and thumb-friendly controls.
- Make the story slider prominent near the top of the page.
- Keep key actions—event details and directions—easy to reach.
- Use compressed responsive images and avoid loading all full-resolution story photos immediately.

### Desktop

- Constrain content to a comfortable reading width.
- Present the couple's profiles side by side where space allows.
- Give the slider a phone-like or cinematic frame without stretching portrait images.
- Retain visible previous/next controls and keyboard support.

## Placeholder Assets

Use temporary royalty-free or generated placeholders with consistent dimensions until final assets are supplied.

```text
public/
└── images/
    ├── couple-hero-placeholder.webp
    ├── bride-placeholder.webp
    ├── groom-placeholder.webp
    ├── story-01-placeholder.webp
    ├── story-02-placeholder.webp
    ├── story-03-placeholder.webp
    └── story-04-placeholder.webp
```

Recommended image treatment:

- Hero image: landscape, approximately `1600 × 1000`.
- Profile images: portrait, approximately `800 × 1000`.
- Story images: portrait, approximately `1080 × 1920`.
- Prefer WebP or AVIF, with meaningful alternative text.
- Do not publish private photographs until the couple has approved them.

## Suggested Page Structure

```text
Hero / Save the Date
├── Couple names
├── Engagement announcement
└── Date and primary action

Meet the Couple
├── Bride portrait and introduction
└── Groom portrait and introduction

Our Story
└── Auto-playing story slider

Celebration Details
├── Function schedule
├── Venue and address
└── Open in Maps

Footer
└── Closing note from the couple and families
```

## Accessibility and Quality Checklist

- [ ] Every meaningful image has descriptive alternative text.
- [ ] The story can be paused and operated without touch gestures.
- [ ] Keyboard focus is visible and follows a logical order.
- [ ] Text remains readable at 200% zoom.
- [ ] Reduced-motion preferences are respected.
- [ ] The maps destination is clearly labelled.
- [ ] Dates and times include the local timezone where helpful.
- [ ] The page remains functional when JavaScript or the local LLM is unavailable.
- [ ] Images are responsive, compressed, and lazy-loaded below the fold.
- [ ] The final page is tested on iOS Safari, Android Chrome, and desktop browsers.

## Information Needed Before Launch

- [ ] Engagement date and year
- [ ] Complete function schedule and timings
- [x] Venue name, complete address, and verified Maps link
- [ ] Final bride, groom, couple, and story photographs
- [ ] Approved introductions for Samiksha and Chinmay
- [ ] Groom's parents' names, if they should be displayed
- [ ] Couple-approved version of their story
- [ ] RSVP contact or form, if required
- [ ] Dress code, parking, accommodation, or other guest notes, if applicable

## Privacy Note

This is a personal invitation. Avoid exposing phone numbers, private addresses, guest lists, or photographs unless the couple has approved publication. If the invitation is intended only for invited guests, consider an unlisted URL or a simple access code.

---

Made with love for **Samiksha & Chinmay**.
