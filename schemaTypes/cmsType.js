import {defineField, defineType} from 'sanity'

export const cmsType = defineType({
  name: 'usuarios',
  title: 'Usuarios',
  type: 'document',
  fields: [
    defineField({
      name: 'Nome',
      type: 'string',
    }),
    defineField({
        name: 'Sobrenome',
        type: 'string',
    }),
    defineField({
        name: 'Idade',
        type: 'number',
    }),
    defineField({
        name: 'DataDeNascimento',
        type: 'datetime',
    }),
    defineField({
      name: 'ReceberPromocoes',
      type: 'boolean',
    }),
  ],
})