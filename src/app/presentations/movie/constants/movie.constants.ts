import { Review } from '../models/review.model';

export const SAMPLE_TITLE = 'avengers';

export const RECOMENDATIONS_MOVIES_LIMIT = 7;

export const REVIEWS: Review[] = [
  {
    date: 'December 18, 2020',
    highlightMessage: 'read the rest',
    message:
      "It isn't as easy as saying 'Wonder Woman 1984' is a good or bad movie. The pieces are there, and there are moments I adore, but it does come across as a bit of a mess, even though the action sequences are breathtaking. If you're a fan of the original film, you'll be more willing to take the ride, but for those more indifferent, it may be a bit of a blander sit. If you can and are planning to watch it, the theatrical experience is the way to go - there is nothing like seeing these stunning sets, fun action scenes and hearing Zimmer's jaw-dropping score like on the big screen. - Chris dos Santos",
    name: 'SWITCH',
    rating: '7.0',
  },
  {
    date: 'December 18, 2020',
    highlightMessage: '',
    message:
      "If you enjoy reading my Spoiler-Free reviews, please follow my blog @ https://www.msbreviews.com The superhero genre has been growing exponentially during the last decade, so it's bizarre to go through an entire year with only Birds of Prey and The New Mutants instead of literally dozens of films from both Marvel and DC. Thankfully, Warner Bros. decided to release Wonder Woman 1984 before the year's end, but not without a catch. Most people will only have the possibility of watching one of the few blockbusters of 2020 through HBO Max, a streaming service only",
    name: 'msbreviews',
    rating: '8.0',
  },
];
