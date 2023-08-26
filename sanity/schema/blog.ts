export default {
    name: 'blog',
    type: 'document',
    title: 'Blog',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title'
        },
      {
            title: 'Launch Scheduled At',
            name: 'launchAt',
            type: 'datetime'
        }

    ]
}