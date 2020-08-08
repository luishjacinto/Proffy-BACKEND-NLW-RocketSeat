import knex from 'knex'

exports.seed = function(knex: knex) {
    return knex('classes').del()
      .then(function () {
        return knex('classes').insert([
            {
                subject: 'Fisica',
                cost: 62,
                user_id: 1
            },
            {
                subject: 'Logica de Programação',
                cost: 120,
                user_id: 2
            },
            {
                subject: 'Matematica',
                cost: 40,
                user_id: 3
            },
            {
                subject: 'Artes',
                cost: 400,
                user_id: 4
            }
        ]);
      });
  };