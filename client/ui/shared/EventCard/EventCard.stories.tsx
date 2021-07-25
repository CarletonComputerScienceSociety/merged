import { storiesOf } from '@storybook/react';
import { EventCard } from './EventCard';

storiesOf('EventCard', module).add('base', () => <EventCard text="Hello World" />);
