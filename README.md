# AI Review Agent

This is a GitHub App that reviews pull requests and submits reviews with AI.

## Setup

BEGIN COME BACK AND UPDATE

NGROK Auth token

1. Download NGROK [here](https://download.ngrok.com/). This will be used to create a secure tunnel to your local server.

2. Run NGROK in your terminal with the following command:

```
ngrok http 3000
```

Here you'll see a URL in the format of `https://<random>.ngrok.app`. Make sure to save this URL as you'll need it to configure your GitHub App.

END COME BACK AND UPDATE

Note: Once you close out of ngrok and reopen it, it provides a brand new URL. This url needs to be updated manually in the repo's webhook as well as the github app's configuration.

3. Create a new [GitHub App here](https://github.com/settings/apps)

- Name the App anything you want, and use any URL for the Homepage URL. Neither matters.

- Make sure to paste the NGROK URL + `/api/review` (e.g. `https://4836-204-48-36-234.ngrok-free.app/api/review`) as the "Webhook URL"
- Create a webhook secret, this can be anything and then paste it in the "secret" field when setting up the GitHub app
- Make sure to grant the app the read & write permissions for the following:
  - Pull Requests
  - Repository Contents
  - Issues
  - Commit Statuses
  - Webhooks
- Subscribe to the following events:

  - Pull Request
  - Pull Request Review
  - Pull Request Review Comment
  - Pull Request Comment Thread
  - Commit Comment

- Click the "Create GitHub App" button.

- Click the "generate a private key" hyperlink, followed by the "Generate a private key" button. This should automatically download your private key (this will be used later on to authenticate your app.)

- Install your GitHub app to all of your repositories by clicking the "Install App" tab from the left pane of the current page, and then select "All repositories."

4. Clone the repo

```
git clone https://github.com/gitrlawton/ai-pr-reviewer
cd ai-pr-reviewer
```

5. Install dependencies

```
npm install
```

6. Get your Groq API key [here](https://console.groq.com/keys). Through Groq, you'll have free access to the Llama and Gemini models.

7. Create a `.env` file with the following variables:

```
GITHUB_PRIVATE_KEY=<your-private-key>
GITHUB_APP_ID=<your-app-id>
GITHUB_WEBHOOK_SECRET=<your-webhook-secret>
GROQ_API_KEY=<your-groq-api-key>
```

BEGIN COME BACK AND UPDATE

You can find...

For the GitHub Private Key, locate the .pem file that was downloaded following the creation of the GitHub App, and open it in a text editor such as Notepad. Copy and paste the entire contents of the file, beginning with -----BEGIN RSA PRIVATE KEY----- and ending with -----END RSA PRIVATE KEY-----. Lastly, wrap the pasted contents in double quotes ("...").

END COME BACK AND UPDATE

8. Within the `ai-pr-reviewer` directory, from your IDE, run the code with the following command:

```
npm run start
```

9. Create a pull request on your repository and watch the review agent submit a review!
