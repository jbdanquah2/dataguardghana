# DataGuard Ghana

A responsive, static website for DataGuard Ghana, built with Next.js, TypeScript, Tailwind CSS, React Hook Form and Zod. Enquiries are validated in the browser and prepared as structured WhatsApp messages.

## Requirements

- Node.js 20.9 or newer
- npm
- Firebase CLI access to the intended Firebase project

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Quality checks and production build

```bash
npm run lint
npm run typecheck
npm run build
```

The production build is a fully static export written to `out/`.

## Firebase Hosting

This repository is configured for the `dataguardghana` Hosting site in the Firebase project `belicks`. The explicit Hosting target prevents deployments from changing another site in the same project.

1. Authenticate with a Firebase account that can access the `belicks` project.
2. Set the public production URL before building:

   ```bash
   NEXT_PUBLIC_SITE_URL=https://dataguardghana.web.app npm run build
   ```

3. Preview locally:

   ```bash
   npx firebase-tools emulators:start --only hosting:dataguardghana --project belicks
   ```

4. Deploy only the DataGuard Ghana Hosting target:

   ```bash
   npx firebase-tools deploy --only hosting:dataguardghana --project belicks
   ```

Firebase Hosting release history can be used to roll back to an earlier release if required.

## GitHub deployment workflow

The workflow at `.github/workflows/deploy-firebase.yml` validates and deploys the site when code is pushed to `main`. It can also be started manually from the GitHub Actions tab.

Before running it, create the following GitHub Actions repository secret:

- `FIREBASE_SERVICE_ACCOUNT_BELICKS` — the complete JSON key for a Firebase service account with permission to deploy Firebase Hosting releases in the `belicks` project.

Store the JSON only as an encrypted GitHub Actions secret. Do not commit the service-account file or its contents to the repository.

The workflow builds with `NEXT_PUBLIC_SITE_URL=https://dataguardghana.web.app` and explicitly sets `target: dataguardghana`, so it does not deploy the separate `belicks` Hosting site.

## TODO: Confirm before launch

- Set `NEXT_PUBLIC_SITE_URL` to the final canonical HTTPS domain for every production build.
- Review and approve the operational details, retention period and effective date in the privacy notice.
- Replace or approve the placeholder favicon at `public/icon.svg`.

No database, authentication, server runtime or Vercel configuration is required.
