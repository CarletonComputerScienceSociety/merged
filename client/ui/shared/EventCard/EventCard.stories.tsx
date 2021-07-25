import { storiesOf } from '@storybook/react';
import { EventCard } from './EventCard';

storiesOf('EventCard', module).add('base', () => {
  return <EventCard text="Hello World" />;
});
