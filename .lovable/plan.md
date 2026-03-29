

## Plan: Add Login Link to Website

Add a login link to the Header and Footer so users can easily access the authentication flow.

### Changes

**1. `src/components/Header.tsx`**
- Add a "Login" link to the navigation bar (both desktop and mobile) pointing to `/login`
- Style it subtly (e.g., as a text link or small button) so it doesn't compete with the "Join Us" CTA

**2. `src/components/Footer.tsx`**
- Add a "Member Login" link in the footer's Quick Links or Contact section pointing to `/login`

Both links will use React Router's `<Link>` component for client-side navigation.

