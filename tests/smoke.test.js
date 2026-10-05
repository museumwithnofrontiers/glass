import { describeGallerySmoke } from '@museumwnf/viewer-layout/dxa/testing'
import { catalogues as sharedTexts } from '@museumwnf/viewer-i18n/gallery'
import manifest from '@inventory-data/manifest.json'
import ownTexts from '../locales/en.json'
import config from '../src/dataset.config.js'

// The gallery family's smoke test, run against this gallery's own dataset.
// The picks are records of that dataset the tests look for; each is described
// in the suite's own documentation (@museumwnf/viewer-layout/dxa/testing).
describeGallerySmoke({
  config,
  sharedTexts,
  ownTexts,
  manifest,
  namespace: 'glass',
  picks: {
    collection: {
      tiles: 9,
      paginations: 2,
    },
    about: 'Glass',
    credits: 'LOCAL PROJECT TEAMS',
    chip: {
      item: 'fd051a6c-6d76-5872-b5f1-48712d9ee72b',
      project: 'Discover Islamic Art',
      className: 'mwnf-chip--ISLandEPM',
    },
    noticeItem: 'c27a36c0-c043-5311-9e26-1ac05ca21b70',
    dynasty: {
      item: 'fbb1ba22-98ad-5080-bfbe-53a4a9d43d9f',
      name: 'Sassanids',
    },
    timeline: {
      code: 'uk',
      id: 'gbr',
      country: 'United Kingdom',
    },
    partner: {
      id: '6001ff30-e9b6-573e-a38c-5ac23b472e6c',
      name: 'Saint Louis Art Museum',
      city: 'Saint Louis',
      country: 'United States of America',
      objects: 2,
    },
  },
})
