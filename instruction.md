# Event Platform

A platform for managing events with an authorization system and different permission levels.

## Features

### Authorization System
- User login (admin/user)
- JWT tokens for secure authorization
- User roles (ADMIN/USER)
- Secured API endpoints

### Event Management
- Event creation
- Event editing (own events for users, all events for admin)
- 2 event limit for regular users
- Event search functionality
- Event categories (Conference, Workshop, Meetup, Webinar)

### Admin Panel
- Full event management
- Ability to mark events as featured
- Full access to all functions

### Integrations
- Sanity CMS as backend
- NextAuth for authorization
- Next.js 15 as framework

## System Requirements

- Node.js (version 18 or higher)
- npm or yarn
- Git

## Installation

1. Clone repository:

```bash
git clone [repository_URL]
cd event-platform
`

2. Install dependencies for main application:

```bash
npm install
`

3. Install dependencies for Sanity:

```bash
cd sanity
npm install
`

4. Environment variables configuration:

Create `.env.local` file in root directory:

```env
NEXTAUTH_SECRET="supersecretkey123456789"
NEXTAUTH_URL="http://localhost:3000"

# Sanity
NEXT_PUBLIC_SANITY_PROJECT_ID="your_project_id"
NEXT_PUBLIC_SANITY_DATASET="production"
SANITY_API_TOKEN="your_api_token"
`

## Running the Project

1. Start Sanity Studio (in sanity directory):

```bash
cd sanity
npm run dev
`

Sanity Studio will be available at: `http://localhost:3333`

2. In a new terminal, run Next.js application (in root directory):

```bash
cd ..
npm run dev
`

Application will be available at: `http://localhost:3000`

## User Configuration

1. Run the password hashing script:

```bash
npm run hash-passwords
`

### Default Users
- Admin: username: admin, password: admin123
- User1: username: user1, password: user123
- User2: username: user2, password: user123

## Project Structure

```
event-platform/
├── app/                    # Next.js 15 app router
├── components/            # React components
├── lib/                   # Helper functions and configuration
├── public/               # Static files
├── sanity/              # Sanity CMS configuration
├── scripts/             # Helper scripts
└── types/               # TypeScript types
`

## Core Technologies

- Next.js 15
- React 18
- TypeScript
- Sanity CMS
- NextAuth.js
- TailwindCSS
- Shadcn/ui

## Role-based Functions

### Administrator
- Full access to all events
- Can edit all events
- No event creation limit
- Can mark events as featured

### User
- Can create maximum 2 events
- Can edit only own events
- Can view all events
- Cannot mark events as featured

## API Endpoints

- `POST /api/events/create` - Create new event
- `PUT /api/events/update` - Update event
- `GET /api/events` - Get list of events

## Troubleshooting

1. Sanity connection issues:
- Check SANITY_PROJECT_ID and SANITY_DATASET correctness
- Ensure API token has proper permissions

2. Authorization issues:
- Verify users.json was generated
- Ensure NEXTAUTH_SECRET is set

3. Image loading issues:
- Verify image domains are configured in next.config.mjs
- Check if image URLs are correct and accessible

4. Event creation/editing issues:
- Ensure user is properly authenticated
- Check if user has required permissions
- Verify Sanity token has write permissions

## Development

1. Clone repository
2. Create new branch for your feature
3. Make changes
4. Create Pull Request

## Database Schema

### Event Schema
- title (string, required)
- slug (slug, auto-generated from title)
- description (text)
- date (datetime)
- capacity (number, min: 1)
- location (string)
- imageUrl (url)
- category (string: Conference/Workshop/Meetup/Webinar)
- isFeatured (boolean)
- createdBy (reference to user)

### User Schema
- name (string)
- username (string, required)
- role (string: ADMIN/USER)
- events (array of references to events)

## Environment Variables Required

```env
NEXTAUTH_SECRET=
NEXTAUTH_URL=
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=
SANITY_API_TOKEN=
`

## License

MIT
