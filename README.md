# Boston Datavis Meetup

## What

This is the www home of the [Boston Data Vis Meetup](http://meetup.com/bostondatavis).

[Talk to us on twitter #bostondatavis](https://twitter.com/search?q=%23bostondatavis&src=typd)

## Who

- [Irene Ros](http://twitter.com/ireneros)

## Development Setup

1. `npm install`
2. `npm run get-secrets`
3. `npm build`
4. `npm start`

## Deployment
```
ansible-playbook --ask-sudo-pass -i bostondatavis.com, deploy/ansible/deploy.yml
```
