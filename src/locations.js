export const locations = {
  timeline: {
    description: 'You are on your Timeline. Endless posts scroll by. There are heated discussions about AI, crypto, and the latest drama.',
    exits: {
      north: 'trending',
      east: 'dms',
      west: 'profile'
    },
    items: ['viral_meme']
  },
  trending: {
    description: 'You\'ve entered the Trending Topics. Hot takes and hashtags swirl around you like a storm.',
    exits: {
      south: 'timeline',
      east: 'spaces'
    },
    items: ['trending_hashtag']
  },
  dms: {
    description: 'Welcome to your DMs. Spam bots lurk in the shadows. A few genuine messages shine through.',
    exits: {
      west: 'timeline'
    },
    items: ['blue_tick_offer']
  },
  profile: {
    description: 'This is your Profile. Your ratio of followers to following is displayed prominently.',
    exits: {
      east: 'timeline'
    },
    items: ['old_tweet']
  },
  spaces: {
    description: 'You\'ve entered a Space. People are discussing the future of AI. Someone is definitely using a fake accent.',
    exits: {
      west: 'trending'
    },
    items: ['speaker_badge']
  }
}
