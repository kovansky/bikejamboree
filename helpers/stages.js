export const stopsData = [
  {
    lat: 51.1762,
    lon: 71.5048,
    city: 'nursultan',
    country: 'kazakhstan',
    type: 'start',
  },
  {
    lat: 46.8002,
    lon: 61.6654,
    city: 'aral',
    country: 'kazakhstan',
    type: 'regular',
  },
  {
    lat: 41.3125,
    lon: 69.2787,
    city: 'tashkent',
    country: 'uzbekistan',
    type: 'regular',
  },
  {
    lat: 37.9406,
    lon: 58.3823,
    city: 'ashgabat',
    country: 'turkmenistan',
    type: 'regular',
  },
  {
    lat: 35.6935,
    lon: 51.369,
    city: 'teheran',
    country: 'iran',
    type: 'regular',
  },
  {
    lat: 34.4905,
    lon: 46.7563,
    city: 'kermanshah',
    country: 'iran',
    type: 'regular',
  },
  {
    lat: 31.9517,
    lon: 35.924,
    city: 'amman',
    country: 'jordan',
    type: 'regular',
  },
  {
    lat: 31.2018,
    lon: 29.9158,
    city: 'alexandria',
    country: 'egypt',
    type: 'regular',
  },
  {
    lat: 40.5493,
    lon: 17.2489,
    city: 'taranto',
    country: 'italy',
    type: 'regular',
  },
  {
    lat: 41.49093,
    lon: 13.81383,
    city: 'monte_cassino',
    country: 'italy',
    type: 'regular',
  },
  {
    lat: 45.4613,
    lon: 9.1595,
    city: 'milan',
    country: 'italy',
    type: 'regular',
  },
  {
    lat: 48.8589,
    lon: 2.3469,
    city: 'paris',
    country: 'france',
    type: 'regular',
  },
  {
    lat: 55.9537,
    lon: -3.1884,
    city: 'edinburgh',
    country: 'united_kingdom',
    type: 'finish',
  },
  {
    lat: 48.3062,
    lon: 14.2862,
    city: 'linz',
    country: 'austria',
    type: 'regular',
  },
  {
    lat: 50.214,
    lon: 19.008,
    city: 'katowice',
    country: 'poland',
    type: 'regular',
  },
  {
    lat: 54.3275,
    lon: 18.8645,
    city: 'gdansk',
    country: 'poland',
    type: 'finish',
  },
]

export const stagesData = [
  {
    name: 'stage_i',
    id: 'etap-i',
    startPoint: stopsData[0],
    startDate: new Date(2022, 10, 12),
    finishPoint: stopsData[1],
    finishDate: new Date(2022, 11, 9),
    distance: '1500 km',
    leader: 'Zbigniew Sas',
    nextStages: [1],
  },
  {
    name: 'stage_ii',
    id: 'etap-ii',
    startPoint: stopsData[1],
    startDate: new Date(2022, 11, 10),
    finishPoint: stopsData[2],
    finishDate: new Date(2022, 11, 30),
    distance: '1400 km',
    leader: 'Miłosz Bączkowski',
    previousStages: [0],
    nextStages: [2],
  },
  {
    name: 'stage_iii',
    id: 'etap-iii',
    startPoint: stopsData[2],
    startDate: new Date(2022, 11, 31),
    finishPoint: stopsData[3],
    finishDate: new Date(2023, 0, 20),
    distance: '1400 km',
    leader: 'Arkadiusz Kościelski',
    previousStages: [1],
    nextStages: [3],
  },
  {
    name: 'stage_iv',
    id: 'etap-iv',
    startPoint: stopsData[3],
    startDate: new Date(2023, 0, 21),
    finishPoint: stopsData[4],
    finishDate: new Date(2023, 1, 10),
    distance: '1300 km',
    leader: 'Monika Szenfer',
    previousStages: [2],
    nextStages: [4],
  },
  {
    name: 'stage_v',
    id: 'etap-v',
    startPoint: stopsData[4],
    startDate: new Date(2023, 1, 11),
    finishPoint: stopsData[5],
    finishDate: new Date(2023, 2, 3),
    distance: '1000 km',
    leader: 'Adam Dąbrowski',
    previousStages: [3],
    nextStages: [5],
    points: [
      { lat: 34.6504, lon: 50.8417 },
      { lat: 32.6627, lon: 51.6955 },
      { lat: 33.4994, lon: 49.053 },
      { lat: 33.8973, lon: 48.7516 },
    ],
  },
  {
    name: 'stage_vi',
    id: 'etap-vi',
    startPoint: stopsData[5],
    startDate: new Date(2023, 2, 4),
    finishPoint: stopsData[6],
    finishDate: new Date(2023, 2, 24),
    distance: '1400 km',
    leader: 'Marcin Dałkiewicz',
    previousStages: [4],
    nextStages: [6],
  },
  {
    name: 'stage_vii',
    id: 'etap-vii',
    startPoint: stopsData[6],
    startDate: new Date(2023, 2, 25),
    finishPoint: stopsData[7],
    finishDate: new Date(2023, 3, 21),
    distance: '1800 km',
    leader: 'Dariusz Zajączkowski',
    previousStages: [5],
    nextStages: [7],
    points: [
      { lat: 32.7045, lon: 35.2898 },
      { lat: 32.8184, lon: 34.9885 },
      { lat: 31.9257, lon: 34.868 },
      { lat: 31.8953, lon: 34.8105 },
      { lat: 31.7884, lon: 35.2068 },
      { lat: 31.7072, lon: 35.2029 },
      { lat: 31.6076, lon: 34.896 },
      { lat: 31.2986, lon: 34.9349 },
      { lat: 31.2588, lon: 35.2133 },
      { lat: 31.3156, lon: 35.3537 },
      { lat: 31.2588, lon: 35.2133 },
      { lat: 30.8516, lon: 34.7826 },
      { lat: 29.5581, lon: 34.9482 },
      { lat: 29.3142, lon: 34.7408 },
      { lat: 29.035, lon: 34.6619 },
      { lat: 28.5676, lon: 33.9536 },
      { lat: 28.7144, lon: 33.3305 },
      { lat: 29.9737, lon: 32.5263 },
      { lat: 30.6318, lon: 31.9393 },
    ],
  },
  {
    name: 'stage_vii_sea',
    id: 'etap-vii-sea',
    startPoint: stopsData[7],
    startDate: new Date(2023, 3, 22),
    finishPoint: stopsData[8],
    finishDate: new Date(2023, 4, 7),
    distance: '970 Mm',
    leader: 'Anna Śledzińska',
    previousStages: [6],
    nextStages: [8],
  },
  {
    name: 'stage_viii',
    id: 'etap-viii',
    startPoint: stopsData[8],
    startDate: new Date(2023, 4, 8),
    finishPoint: stopsData[9],
    finishDate: new Date(2023, 4, 19),
    distance: '400 km',
    leader: 'Dorota Limontas',
    previousStages: [7],
    nextStages: [9],
  },
  {
    name: 'stage_ix',
    id: 'etap-ix',
    startPoint: stopsData[9],
    startDate: new Date(2023, 4, 20),
    finishPoint: stopsData[10],
    finishDate: new Date(2023, 5, 2),
    distance: '800 km',
    leader: 'Anna Popowska',
    previousStages: [8],
    nextStages: [10, 12],
  },
  {
    name: 'stage_x_west',
    id: 'etap-x-west',
    startPoint: stopsData[10],
    startDate: new Date(2023, 5, 3),
    finishPoint: stopsData[11],
    finishDate: new Date(2023, 5, 16),
    distance: '900 km',
    leader: 'Wojciech Wrześniak',
    previousStages: [9],
    nextStages: [11],
  },
  {
    name: 'stage_xi_west',
    id: 'etap-xi-west',
    startPoint: stopsData[11],
    startDate: new Date(2023, 5, 17),
    finishPoint: stopsData[12],
    finishDate: new Date(2023, 6, 8),
    distance: '1200 km',
    points: [
      { lat: 49.9202, lon: 1.084 },
      { lat: 50.868, lon: 0.6099 },
      { lat: 51.4895, lon: -0.3282 },
      { lat: 53.7976, lon: -1.5436 },
    ],
    leader: 'Piotr Wojtaszek',
    previousStages: [10],
  },
  {
    name: 'stage_x_east',
    id: 'etap-x-east',
    startPoint: stopsData[10],
    startDate: new Date(2023, 5, 3),
    finishPoint: stopsData[13],
    finishDate: new Date(2023, 5, 15),
    distance: '800 km',
    leader: 'Piotr Sudoł',
    previousStages: [9],
    nextStages: [13],
  },
  {
    name: 'stage_xi_east',
    id: 'etap-xi-east',
    startPoint: stopsData[13],
    startDate: new Date(2023, 5, 16),
    finishPoint: stopsData[14],
    finishDate: new Date(2023, 5, 26),
    distance: '800 km',
    previousStages: [12],
    nextStages: [14],
    leader: 'Artur Kulesza'
  },
  {
    name: 'stage_xii_east',
    id: 'etap-xii-east',
    startPoint: stopsData[14],
    startDate: new Date(2023, 5, 27),
    finishPoint: stopsData[15],
    finishDate: new Date(2023, 6, 8),
    distance: '650 km',
    previousStages: [13],
    points: [
      { lat: 50.8097, lon: 19.1222 },
      { lat: 52.2652894, lon: 19.1650943 },
      { lat: 53.0145, lon: 18.6014 },
    ],
    leader: 'Łukasz Tomala',
  },
]

export default {}
