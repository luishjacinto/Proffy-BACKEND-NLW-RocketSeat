import knex from 'knex'

exports.seed = function(knex: knex) {
    return knex('classes').del()
      .then(function () {
        return knex('classes').insert([
            {
                subject: 'F�sica',
                cost: 62,
                user_id: 1
            },
            {
                subject: 'L�gica de Programa��o',
                cost: 120,
                user_id: 2
            },
            {
                subject: 'Matem�tica',
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