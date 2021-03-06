import knex from 'knex'

exports.seed = function(knex: knex) {
    return knex('class_schedule').del()
      .then(function () {
        return knex('class_schedule').insert([
            {
                week_day: 1,
                from: 480,
                to: 1080,
                class_id: 1
            },
            {
                week_day: 2,
                from: 480,
                to: 1080,
                class_id: 1
            },
            {
                week_day: 3,
                from: 480,
                to: 1080,
                class_id: 1
            },
            {
                week_day: 4,
                from: 480,
                to: 1080,
                class_id: 1
            },
            {
                week_day: 5,
                from: 480,
                to: 1080,
                class_id: 1
            },
            {
                week_day: 1,
                from: 480,
                to: 1080,
                class_id: 2
            },
            {
                week_day: 2,
                from: 480,
                to: 1080,
                class_id: 2
            },
            {
                week_day: 3,
                from: 480,
                to: 1080,
                class_id: 2
            },
            {
                week_day: 4,
                from: 480,
                to: 1080,
                class_id: 2
            },
            {
                week_day: 5,
                from: 480,
                to: 1080,
                class_id: 2
            },
            {
                week_day: 1,
                from: 480,
                to: 1080,
                class_id: 2
            },
            {
                week_day: 2,
                from: 480,
                to: 1080,
                class_id: 2
            },
            {
                week_day: 3,
                from: 480,
                to: 1080,
                class_id: 2
            },
            {
                week_day: 4,
                from: 480,
                to: 1080,
                class_id: 2
            },
            {
                week_day: 5,
                from: 480,
                to: 1080,
                class_id: 2
            },
            {
                week_day: 1,
                from: 480,
                to: 1080,
                class_id: 3
            },
            {
                week_day: 2,
                from: 480,
                to: 1080,
                class_id: 3
            },
            {
                week_day: 3,
                from: 480,
                to: 1080,
                class_id: 3
            },
            {
                week_day: 4,
                from: 480,
                to: 1080,
                class_id: 3
            },
            {
                week_day: 5,
                from: 480,
                to: 1080,
                class_id: 3
            },
            {
                week_day: 1,
                from: 480,
                to: 1080,
                class_id: 4
            },
            {
                week_day: 2,
                from: 480,
                to: 1080,
                class_id: 4
            },
            {
                week_day: 3,
                from: 480,
                to: 1080,
                class_id: 4
            },
            {
                week_day: 4,
                from: 480,
                to: 1080,
                class_id: 4
            },
            {
                week_day: 5,
                from: 480,
                to: 1080,
                class_id: 4
            }
        ]);
      });
  };