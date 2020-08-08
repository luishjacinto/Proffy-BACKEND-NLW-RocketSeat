import knex from 'knex'

exports.seed = function(knex: knex) {
    return knex('users').del()
      .then(function () {
        return knex('users').insert([
            {
                name: 'Walter White',
                avatar: 'https://i.insider.com/5dade9bc045a3139e8686c33?width=1100&format=jpeg&auto=webp',
                whatsapp: '202-555-0129',
                bio: 'Sou apenas um professor com câncer que vende meta.'
            },
            {
                name: 'Sergio',
                avatar: 'https://i.pinimg.com/474x/5f/1c/a7/5f1ca7519a6a202738cd1409fe0e8895.jpg',
                whatsapp: '202-555-0129',
                bio: 'Tenho um ´ótimo plano de estudos para você'
            },
            {
                name: 'Utônio',
                avatar: 'https://i.pinimg.com/originals/2c/06/46/2c0646c8fbbbfc300bce61a7a52551d0.jpg',
                whatsapp: '202-555-0129',
                bio: 'Criei as meninas super poderosas.'
            },
            {
                name: 'Xavier',
                avatar: 'https://conteudo.imguol.com.br/c/entretenimento/3c/2020/07/15/o-ator-patrick-stewart-no-papel-de-professor-xavier-1594862762344_v2_450x337.png',
                whatsapp: '202-555-0129',
                bio: 'Vou te ensinar a controlar seus poderes.'
            }
        ]);
      });
  };