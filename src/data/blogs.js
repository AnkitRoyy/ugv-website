import blogIndex from './blogIndex';

// read time and cover image are derived from each post's markdown file
const META = {
  "ros2-autonomy-stack": {
    "read": 4,
    "cover": null
  },
  "open-house-2025": {
    "read": 4,
    "cover": "/blogs/images/open-house/a.png"
  },
  "valkyrie-perception": {
    "read": 3,
    "cover": "/blogs/images/valkyrie-perception/valkyrie_2.jpg"
  },
  "school-outreach-program": {
    "read": 3,
    "cover": "/blogs/images/school-outreach/1.jpg"
  }
};

export const BLOGS = blogIndex.map((b) => ({ ...b, ...META[b.slug] }));
export const CATEGORIES = [...new Set(BLOGS.map((b) => b.category))];
