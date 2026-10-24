# Threadwork Occupational Therapy Centre

React + Vite site. Pages: Home, Services, Team, Testimonials, Contact, Booking.

## Run locally

    npm install
    npm run dev          # http://localhost:5173
    npm run build        # production build in dist/
    npm run preview      # preview the production build

## Project structure

    src/
      main.jsx            entry point, imports the CSS
      App.jsx             page map + layout (Nav, page, Footer)
      pages/              one file per page
      components/         Nav, Footer, Logo, ServiceCard, Testimonial, StitchDivider
      data/               ALL editable content lives here
        site.js           address, phone, email, hours, stats, booking time slots
        services.js       services list
        team.js           therapist profiles
        testimonials.js   client quotes
        nav.js            navigation items
      api/submitForm.js   sends contact/booking forms to your endpoint
      hooks/useHashRoute.js  URL routing (/#/services) with back-button support
      styles/
        base.css          colors, fonts, buttons, forms
        components.css    header and footer
        pages.css         hero, services, team, quotes, contact

## Editing content

Change text in `src/data/*.js`. No page files need to be touched.

## Add a page

1. Create `src/pages/MyPage.jsx` (default export a component).
2. Add it to `PAGES` in `src/App.jsx`.
3. Add `{ id: "mypage", label: "My Page" }` to `src/data/nav.js`.

## Make forms real

Copy `.env.example` to `.env` and set `VITE_FORM_ENDPOINT` to a Formspree/Basin URL
(or your own API). With no endpoint, forms run in demo mode and nothing is sent.

## Deploy

Push to GitHub, import the repo on Vercel or Netlify. Build command `npm run build`,
output directory `dist`. Add `VITE_FORM_ENDPOINT` in the host's environment settings.
