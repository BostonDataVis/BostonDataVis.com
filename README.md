# Boston Datavis Meetup

## What

This is the www home of the [Boston Data Vis Meetup](http://meetup.com/bostondatavis).

[Talk to us on twitter #bostondatavis](https://twitter.com/search?q=%23bostondatavis&src=typd)

## Who

- [Irene Ros](http://twitter.com/ireneros)

## How-to

#### 1. Get an API Key from Meetup.com

  Visit https://secure.meetup.com/meetup_api/key/ and get your API Key. Cut and paste it into a file called `app/data/KEY.txt`. Save it and remove the extension so the file name is simply `KEY`.

#### 2. Install Dependencies

  From the root directory, run `npm install`.

#### 3. Run grunt

  To fetch all the meetup data, run `grunt` from the root directory

#### 4. Start the app server

  From the root directory, run `node index.js`.

#### 5. View index and detail

-  `/` will give you the most recent event
-  `/events` will give you an index of all events, linked to their meetup page
-  `/events/:id` will give you a JSON dump of an individual event

#### Deployment
`(cd deploy/ansible && ansible-playbook --ask-sudo-pass -i inventory/production deploy.yml)`


#### Seeing new meetups that you created on meetup.com on the website

You have to run a deploy to get the site to see new meetups after you add them on meetup.com
If, after a deploy, the changes still do not appear to have happened, ssh into the machine and do
`sudo service site restart`. This will be fixed when #27 is closed.
