# Contact form → Google Sheet + Email

Every enquiry submitted on the website's Contact page is saved as a row in a Google Sheet **and** emailed to Tirupati Associates.

```
Website form  →  /api/contact (Vercel)  →  Google Apps Script web app  →  Google Sheet row + email
```

The script lives in `google-apps-script/Code.gs`. It runs on your own Google account, so there's no third-party service or fee.

---

## 1. Create the Google Sheet

1. Sign in to the Google account that should own the enquiries (e.g. Tirupatiassociates07@gmail.com).
2. Create a new Google Sheet, e.g. **"Tirupati Associates – Website Enquiries"**.
   (The script creates an **Enquiries** tab with headers automatically on the first enquiry.)

## 2. Add the script

1. In the Sheet, open **Extensions → Apps Script**.
2. Delete the sample code and paste the full contents of `google-apps-script/Code.gs`.
3. At the top of the script, set:
   - `NOTIFY_EMAIL` — the address that should receive enquiry emails (comma-separate for more than one).
   - `SHARED_SECRET` — replace `CHANGE-ME-TO-A-LONG-RANDOM-STRING` with a long random password (letters and numbers, 30+ characters). You'll use the same value in step 4.
4. Click **Save**.

## 3. Deploy it as a web app

1. Click **Deploy → New deployment**.
2. Click the gear icon next to "Select type" and choose **Web app**.
3. Set:
   - **Execute as:** Me
   - **Who has access:** Anyone
4. Click **Deploy**, then **Authorize access** and allow the permissions (Google shows an "unverified app" warning because it's your own script — click **Advanced → Go to … (unsafe)** to continue).
5. Copy the **Web app URL** (it ends in `/exec`).

Tip: open that URL in a browser — you should see `{"ok":true,"message":"Tirupati Associates enquiry endpoint is running."}`.

## 4. Add the settings to Vercel

In the Vercel dashboard → your project → **Settings → Environment Variables**, add:

| Name | Value |
|---|---|
| `GOOGLE_SCRIPT_URL` | the Web app URL from step 3 |
| `CONTACT_FORM_SECRET` | the same secret you set as `SHARED_SECRET` in step 2 |

Apply them to **Production** (and Preview if you want), then **redeploy** the site so it picks them up.

For local testing, create a `.env.local` file in the project root with the same two lines (see `.env.example`). `.env.local` is git-ignored — never commit real values.

## 5. Test

Submit the Contact form on the live site. Within a few seconds you should see a new row in the **Enquiries** tab and an email in the `NOTIFY_EMAIL` inbox. Replying to that email goes straight to the customer.

---

### Changing the script later

After editing `Code.gs` in Apps Script, use **Deploy → Manage deployments → Edit (pencil) → Version: New version → Deploy**. This keeps the same URL, so nothing needs to change in Vercel.

### Limits

Free Gmail accounts can send about 100 emails a day through Apps Script (Google Workspace accounts ~1,500) — far more than a typical enquiry form needs. Rows are always saved to the Sheet even if the daily email limit is reached.

### Troubleshooting

- **Form shows "not configured yet"** → `GOOGLE_SCRIPT_URL` isn't set in Vercel, or the site wasn't redeployed after adding it.
- **Form shows "couldn't send your enquiry"** → check that the secret matches exactly in both places, and that the deployment's access is set to **Anyone**. Vercel → Logs will show the detailed error.
