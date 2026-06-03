export const lessonsTab = {
  browseLinks: ['All Lessons', 'Latest', 'Most Popular'],
  skillLevels: ['Beginner', 'Easy', 'Intermediate', 'Expert'],
  popular: [
    { title: 'Smoke on the Water', artist: 'Deep Purple' },
    { title: 'Enter Sandman', artist: 'Metallica' },
    { title: 'Comfortably Numb', artist: 'Pink Floyd' },
    { title: "Sweet Child O'Mine", artist: "Guns N' Roses" },
    { title: 'Back in Black', artist: 'AC/DC' },
    { title: 'Eruption', artist: 'Van Halen' },
  ],
  artists: [
    { name: 'AC/DC', lessons: 24, image: '/artist-acdc.jpg' },
    { name: 'Black Sabbath', lessons: 18, image: '/artist-blacksabbath.jpg' },
    { name: 'Eagles', lessons: 14, image: '/artist-eagles.jpg' },
    { name: 'Eric Clapton', lessons: 31, image: '/artist-ericclapton.jpg' },
    { name: 'Foo Fighters', lessons: 12, image: '/artist-foofighters.jpg' },
    { name: "Guns N' Roses", lessons: 27, image: '/artist-gunsnroses.jpg' },
    { name: 'Jimi Hendrix', lessons: 22, image: '/artist-jimihendrix.jpg' },
    { name: 'Led Zeppelin', lessons: 19, image: '/artist-ledzeppelin.jpg' },
    { name: 'Pink Floyd', lessons: 16, image: '/artist-pinkfloyd.jpg' },
    { name: 'Metallica', lessons: 33, image: '/artist-metallica.jpg' },
    { name: 'Iron Maiden', lessons: 15, image: '/artist-ironmaiden.jpg' },
    { name: 'Linkin Park', lessons: 11, image: '/artist-linkinpark.jpg' },
  ],
  whatsHot: [
    { title: 'Billy Idol', tutor: 'Danny Gill', level: 'Intermediate', image: '/hero-artist_Billy_Idol.jpg' },
    { title: 'Joe Satriani', tutor: 'Jamie Humphries', level: 'Easy', image: '/hero-artist_Joe_Satriani.jpg' },
  ],
  gridItems: [
    { title: 'Billy Idol', tutor: 'Danny Gill', image: '/hero-artist_Billy_Idol.jpg' },
    { title: 'Carlos Santana', tutor: 'Jamie Humphries', image: '/hero-artist_Carlos_Santana.jpg' },
    { title: 'Duran Duran', tutor: 'Danny Gill', image: '/hero-artist_Duran_Duran.jpg' },
    { title: 'Joe Satriani', tutor: 'Sam Bell', image: '/hero-artist_Joe_Satriani.jpg' },
    { title: 'Linkin Park', tutor: 'Danny Gill', image: '/hero-artist_Linkin_Park.jpg' },
    { title: 'Neil Young', tutor: 'Rich Shaw', image: '/hero-artist_Neil_Young.jpg' },
    { title: 'Slash', tutor: 'Danny Gill', image: '/hero-artist_Slash.jpg' },
    { title: 'Sting', tutor: 'Jamie Humphries', image: '/hero-artist_Sting.jpg' },
  ],
  tutors: [
    { name: 'Danny Gill', lessons: 187, image: '/hero-tutor_Danny_Gill.jpg' },
    { name: 'Edoardo Taddei', lessons: 74, image: '/hero-tutor_Edoardo_Taddei.jpg' },
    { name: 'Eliza Lee', lessons: 45, image: '/hero-tutor_Eliza_Lee.jpg' },
    { name: 'Jamie Humphries', lessons: 203, image: '/hero-tutor_Jamie_Humphries.jpg' },
    { name: 'Nick Jennison', lessons: 118, image: '/hero-tutor_Nick_Jennison_2.jpg' },
    { name: 'Rich Shaw', lessons: 89, image: '/hero-tutor_Rich_Shaw.jpg' },
    { name: 'Sam Bell', lessons: 214, image: '/hero-tutor_Sam_Bell.jpg' },
  ],
  genres: ['Classic Rock', "80's Rock", 'Rock', 'Blues', 'Metal', 'Acoustic', 'Country', 'Fusion', 'Jazz', 'Pop'],
  genreFeatures: [
    {
      name: 'Classic Rock',
      lessons: [
        { title: 'Smoke on the Water', tutor: 'Danny Gill', image: '/hero-artist_Deep_Purple.jpg' },
        { title: 'Hotel California', tutor: 'Rich Shaw', image: '/hero-artist_Eagles.jpg' },
      ]
    },
    {
      name: "80's Rock",
      lessons: [
        { title: "Sweet Child O'Mine", tutor: 'Danny Gill', image: '/hero-artist_Guns_N_Roses.jpg' },
        { title: 'Pour Some Sugar on Me', tutor: 'Jamie Humphries', image: '/hero-artist_Def_Leppard.jpg' },
      ]
    },
    {
      name: 'Blues',
      lessons: [
        { title: 'Pride and Joy', tutor: 'Danny Gill', image: '/hero-artist_Stevie_Ray_Vaughan.jpg' },
        { title: 'The Thrill is Gone', tutor: 'Sam Bell', image: '/hero-artist_BB_King.jpg' },
      ]
    },
    {
      name: 'Metal',
      lessons: [
        { title: 'Enter Sandman', tutor: 'Jamie Humphries', image: '/hero-artist_Metallica.jpg' },
        { title: 'Master of Puppets', tutor: 'Danny Gill', image: '/hero-artist_Metallica_3.jpg' },
      ]
    },
  ],
}

export const tabContent = {
  'Featured': {
    layout: 'portrait',
    browseLinks: ['All Courses', 'Latest', 'Most Popular'],
    genres: ['Rock', 'Metal', 'Blues', 'Acoustic'],
    featured: [
      { title: 'The Extremist', tutor: 'Danny Gill', image: '/course-1.jpg' },
      { title: 'Are You Experienced', tutor: 'Danny Gill', image: '/course-2.jpg' },
      { title: 'Highway to Hell', tutor: 'Danny Gill', image: '/course-4.jpg' },
      { title: 'Hotel California', tutor: 'Danny Gill', image: '/course-5.jpg' },
      { title: 'Dark Side of the Moon', tutor: 'Jamie Humphries', image: '/course-6.jpg' },
      { title: 'The Number Of The Beast', tutor: 'Danny Gill', image: '/course-10.jpg' },
      { title: 'Dr. Feelgood', tutor: 'Danny Gill', image: '/course-3.jpg' },
    ]
  },
  'New': {
    layout: 'portrait',
    browseLinks: ['All New Courses', 'Latest', 'Most Popular'],
    genres: ['Rock', 'Metal', '80s', 'Blues'],
    featured: [
      { title: 'The Extremist', tutor: 'Danny Gill', image: '/course-1.jpg' },
      { title: 'Are You Experienced', tutor: 'Danny Gill', image: '/course-2.jpg' },
      { title: 'Dr. Feelgood', tutor: 'Danny Gill', image: '/course-3.jpg' },
      { title: 'Highway to Hell', tutor: 'Danny Gill', image: '/course-4.jpg' },
      { title: 'Hotel California', tutor: 'Danny Gill', image: '/course-5.jpg' },
      { title: 'Dark Side of the Moon', tutor: 'Jamie Humphries', image: '/course-6.jpg' },
      { title: 'Metallica - The Black Album', tutor: 'Jamie Humphries', image: '/course-7.jpg' },
    ]
  },
  'Classic Albums': {
    layout: 'portrait',
    browseLinks: ['All Classic Albums', 'Latest', 'Most Popular'],
    genres: ['Rock', 'Metal', 'Blues', 'Pop'],
    featured: [
      { title: 'Dark Side of the Moon', tutor: 'Jamie Humphries', image: '/course-6.jpg' },
      { title: 'Metallica - The Black Album', tutor: 'Jamie Humphries', image: '/course-7.jpg' },
      { title: '5150', tutor: 'Sam Bell', image: '/course-8.jpg' },
      { title: 'Machine Head', tutor: 'Danny Gill', image: '/course-9.jpg' },
      { title: 'The Number Of The Beast', tutor: 'Danny Gill', image: '/course-10.jpg' },
      { title: 'The Extremist', tutor: 'Danny Gill', image: '/course-1.jpg' },
      { title: 'Highway to Hell', tutor: 'Danny Gill', image: '/course-4.jpg' },
    ]
  },
  'Learning Paths': {
    layout: 'landscape',
    browseLinks: ['All Learning Paths'],
    genres: [],
    featured: [
      { title: '2 Week Scales Bootcamp', tutor: 'Sam Bell', image: '/learningpath-1.jpg' },
      { title: '2 Week Technique Builder', tutor: 'Sam Bell', image: '/learningpath-2.jpg' },
      { title: '10 Classic Rock Songs in 10 Days', tutor: 'Rich Shaw', image: '/learningpath-3.jpg' },
    ]
  }
}

export const backingTracksTab = {
  browseLinks: ['All Backing Tracks', 'Most Popular'],
  genres: ['Rock', 'Blues', 'Metal', 'Jazz', 'Fusion', 'Funk', 'Acoustic', 'Pop', 'Classic Rock'],
  featured: [
    { title: 'Blues Jam in A Minor', key: 'A Minor', style: 'Blues', image: '/jam-tracks/hero-artist_BB_King.jpg' },
    { title: 'Classic Rock Soloing', key: 'E Minor', style: 'Rock', image: '/jam-tracks/hero-artist_Deep_Purple.jpg' },
    { title: 'Metal Rhythm Track', key: 'D Minor', style: 'Metal', image: '/jam-tracks/hero-artist_Metallica.jpg' },
    { title: 'Funk Groove Jam', key: 'G Minor', style: 'Funk', image: '/jam-tracks/hero-artist_Stevie_Ray_Vaughan.jpg' },
  ],
  jamTracks: {
    keys: ['A Minor', 'E Minor', 'G Major', 'D Major', 'C Major'],
    types: ['Pentatonic', 'Dorian', 'Mixolydian', 'Blues', 'Fusion', 'Fast', 'Slow'],
    featured: [
      { title: 'Minor Pentatonic Jam', key: 'A Minor', image: '/jam-tracks/hero-artist_BB_King.jpg' },
      { title: 'Dorian Groove', key: 'E Dorian', image: '/jam-tracks/hero-artist_Carlos_Santana.jpg' },
      { title: 'Blues Shuffle', key: 'G Major', image: '/jam-tracks/hero-artist_Stevie_Ray_Vaughan.jpg' },
    ]
  },
  songTracks: [
    { title: 'Sweet Child O Mine', artist: "Guns N' Roses", image: '/jam-tracks/hero-artist_Guns_N_Roses.jpg' },
    { title: 'Smoke on the Water', artist: 'Deep Purple', image: '/jam-tracks/hero-artist_Deep_Purple.jpg' },
    { title: 'Eagles Medley', artist: 'Eagles', image: '/jam-tracks/hero-artist_Eagles.jpg' },
    { title: 'Nothing Else Matters', artist: 'Metallica', image: '/jam-tracks/hero-artist_Metallica.jpg' },
  ]
}

export const learningPathsTab = {
  browseLinks: ['All Learning Paths'],
  levels: ['Beginner', 'Intermediate', 'Advanced'],
  featured: [
    { title: '2 Week Scales Bootcamp', tutor: 'Sam Bell', level: 'Beginner', image: '/learning-paths/learningpath-1.jpg' },
    { title: '2 Week Technique Builder', tutor: 'Sam Bell', level: 'Intermediate', image: '/learning-paths/learningpath-2.jpg' },
    { title: '10 Classic Rock Songs in 10 Days', tutor: 'Rich Shaw', level: 'Beginner', image: '/learning-paths/learningpath-3.jpg' },
  ]
}

export const tutorsTabs = ['Featured']

export const tutorsMenuTab = {
  browseLinks: ['All Tutors'],
  featured: [
    { name: 'Danny Gill', lessons: 187, image: '/tutors/hero-tutor_Danny_Gill.jpg' },
    { name: 'Sam Bell', lessons: 214, image: '/tutors/hero-tutor_Sam_Bell.jpg' },
    { name: 'Dave Kilminster', lessons: 156, image: '/tutors/hero-tutor_Dave_Kilminster.jpg' },
    { name: 'Jamie Humphries', lessons: 203, image: '/tutors/hero-tutor_Jamie_Humphries.jpg' },
    { name: 'Guthrie Govan', lessons: 91, image: '/tutors/hero-tutor_Guthrie_Govan.jpg' },
    { name: 'Rich Shaw', lessons: 89, image: '/tutors/hero-tutor_Rich_Shaw.jpg' },
    { name: 'Andy James', lessons: 98, image: '/tutors/hero-tutor_Andy_James.jpg' },
  ]
}
