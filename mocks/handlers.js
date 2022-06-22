import { rest } from 'msw';

export const handlers = [
  rest.get('/home', (_, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        "id": "6E9F0971-229D-4694-8515-7FEE753D2B10",
        "properties": {
          "cols": 2,
          "rows": 1,
          "outer_left_right_margins": 100,
          "outer_top_bottom_margins": 16,
          "inner_left_right_spacing": 16,
          "inner_top_bottom_spacing": 100,
          "direction": "vertical"
        },
        "content": [
          {
            "image": "https://cdn.miswag.me/images/thumbs512/miswag_aLkDkoHz5N5o.jpg",
            "action": {
              "target": "category",
              "id": "1"
            },
            "title": "Product Title Here"
          },
          {
            "image": "https://cdn.miswag.me/images/thumbs512/miswag_aLkDkoHz5N5o.jpg",
            "action": {
              "target": "category",
              "id": "1"
            },
            "title": "Product Title Here"
          },
          {
            "image": "https://cdn.miswag.me/images/thumbs512/miswag_aLkDkoHz5N5o.jpg",
            "action": {
              "target": "category",
              "id": "1"
            },
            "title": "Product Title Here"
          }
        ],
        "type": "grid"
      })
    );
  }),
];
