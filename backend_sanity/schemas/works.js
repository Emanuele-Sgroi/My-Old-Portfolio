export default {
    name: 'works',
    title: 'Works',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'description',
        title: 'Description',
        type: 'string',
      },
      {
        name: 'learned',
        title: 'Learned',
        type: 'string',
      },
      {
        name: 'tagView',
        title: 'TagView',
        type: 'string',
      },
      {
        name: 'level',
        title: 'Level',
        type: 'string',
      },
      {
        name:'levelColor',
        title:'LevelColor',
        type:'string'
    },
      {
        name: 'projectLink',
        title: 'Project Link',
        type: 'string',
      },
      {
        name: 'codeLink',
        title: 'Code Link',
        type: 'string',
      },
      {
        name: 'imgUrl1',
        title: 'ImageUrl1',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
      
      {
        name: 'tags',
        title: 'Tags',
       type:'array',
       of: [
         {
           name:'tag',
           title:'Tag',
           type:'string'
         }
       ]
      },
     
    ],
  };