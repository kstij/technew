// server.js
const express = require('express');
const bodyParser = require('body-parser');
const { createClient } = require('contentful-management');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

// Contentful client setup
const contentfulClient = createClient({
  accessToken: 'CFPAT-pfRokjqV18YM1S_Z4K8SRtuoMrwMYa41DonTmz1giUQ'
});

const spaceId = 'wrt0g3c7bos7'; // Replace with your actual space ID
const environmentId = 'master'; // usually 'master', adjust if necessary

app.use(cors()); // Enable CORS for all origins
app.use(bodyParser.json());

app.post('/subscribe', async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: 'Email is required' });
  }

  try {
    const space = await contentfulClient.getSpace(spaceId);
    const environment = await space.getEnvironment(environmentId);
    
    const entry = await environment.createEntry('subscription', {
      fields: {
        email: {
          'en-US': email
        }
      }
    });

    res.status(200).json({ message: 'Subscription successful', entry });
  } catch (error) {
    console.error('Error creating entry:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
