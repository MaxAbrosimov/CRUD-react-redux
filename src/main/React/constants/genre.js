const fiction = {
  id: 1,
  name: 'Fiction',
  children: [
    {
      id: 11,
      name: 'Children`s',
      children: [
        {
          id: 111,
          name: 'Fairy tale'
        },
        {
          id: 112,
          name: 'Picture Book'
        },
        {
          id: 113,
          name: 'Picture Book'
        }
      ]
    },
    {
      id: 12,
      name: 'Classic',
      children: [
        {
          id: 121,
          name: 'Adventure'
        },
        {
          id: 122,
          name: 'Fantasy'
        },
        {
          id: 123,
          name: 'Mystery'
        },
        {
          id: 124,
          name: 'Mythology',
          children: [
            {
              id: 1241,
              name: 'Fable'
            },
            {
              id: 1242,
              name: 'Folklore'
            },
            {
              id: 1243,
              name: 'Legend'
            },
            {
              id: 1244,
              name: 'Magical realism'
            }
          ]
        },
        {
          id: 125,
          name: 'Tragedy'
        },
        {
          id: 126,
          name: 'Tragic comedy'
        }
      ]
    },
    {
      id: 13,
      name: 'Comics Graphic Novel',
    },
    {
      id: 14,
      name: 'Crime Detective',
    },
    {
      id: 15,
      name: 'Drama',
    },
    {
      id: 16,
      name: 'Fan-Fiction',
    },
    {
      id: 17,
      name: 'Historical fiction',
      children: [
        {
          id: 171,
          name: 'Historical romance'
        },
        {
          id: 172,
          name: 'Historical whodunnit'
        },
        {
          id: 173,
          name: 'Holocaust novell'
        },
        {
          id: 174,
          name: 'Plantation tradition'
        },
        {
          id: 175,
          name: 'Prehistoric fiction'
        },
        {
          id: 176,
          name: 'Regency novel'
        }
      ]
    },
    {
      id: 18,
      name: 'Horror',
      children: [
        {
          id: 181,
          name: 'Body horror'
        },
        {
          id: 182,
          name: 'Gothic fiction'
        },
        {
          id: 183,
          name: 'Psychological'
        },
        {
          id: 184,
          name: 'Supernatural paranormal'
        },
        {
          id: 185,
          name: 'Suspense thriller'
        }
      ]
    },
    {
      id: 19,
      name: 'Poetry',
    },
    {
      id: 20,
      name: 'Romance',
      children: [
        {
          id: 201,
          name: 'Meta fiction'
        }
      ]
    },
    {
      id: 21,
      name: 'Satire',
    },
    {
      id: 22,
      name: 'Science Fiction',
      children: [
        {
          id: 221,
          name: 'Alien invasion'
        },
        {
          id: 222,
          name: 'Cyberpunk deriatives',
          children: [
            {
              id: 2221,
              name: 'Cyberpunk'
            },
            {
              id: 2222,
              name: 'Steampunk'
            }
          ]
        },
        {
          id: 223,
          name: 'Dystopian'
        },
        {
          id: 224,
          name: 'Hard science fiction'
        },
        {
          id: 225,
          name: 'Military science fiction'
        },
        {
          id: 226,
          name: 'Parallel Universe'
        },
        {
          id: 227,
          name: 'Post Apocalyptic'
        },
        {
          id: 228,
          name: 'Soft science fiction'
        },
        {
          id: 229,
          name: 'Space Opera'
        }
      ]
    },
    {
      id: 23,
      name: 'Short story',
    },
    {
      id: 24,
      name: 'Western',
    }
  ]
};

const nonfiction =       {
  id: 5,
  name: 'None Fiction',
  children: [
    {
      id: 51,
      name: 'Blographies and Autobiographies'
    },
    {
      id: 52,
      name: 'Cookbooks'
    },
    {
      id: 53,
      name: 'Diaries & Journals'
    },
    {
      id: 54,
      name: 'Encyclopedias / Dictionaries / Thesaurus'
    },
    {
      id: 55,
      name: 'Essay'
    },
    {
      id: 56,
      name: 'Guides Travel'
    },
    {
      id: 57,
      name: 'Health/Self-help'
    },
    {
      id: 58,
      name: 'History Factual',
      children: [
        {
          id: 581,
          name: 'Academic History',
        },
        {
          id: 582,
          name: 'Genealogy',
        },
        {
          id: 583,
          name: 'Official History',
        },
        {
          id: 584,
          name: 'Peoples History',
        },
        {
          id: 585,
          name: 'Popular history',
        }
      ]
    },
    {
      id: 59,
      name: 'Lab Report'
    },
    {
      id: 60,
      name: 'Law'
    },
    {
      id: 61,
      name: 'Mathematical'
    },
    {
      id: 62,
      name: 'Owners manual'
    },
    {
      id: 63,
      name: 'Philosophy'
    },
    {
      id: 64,
      name: 'Religious Text'
    },
    {
      id: 65,
      name: 'Science Medical'
    },
    {
      id: 66,
      name: 'Text book'
    }
  ]
};

export default [
  {
    id: 0,
    name: 'Digital Library Books',
    children: [
      fiction,
      nonfiction
    ]
  }
];