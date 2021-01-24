let db={
    users: [
        {
            userId: 'g4JaAhFwWiTA3j7MNo3GQ2LaZix2',
            email: 'user@email.com',
            handle: 'user',
            createdAt: '2021-01-09T13:01:48.244Z',
            imageUrl: 'image/abcdefgdgskkk/abcdfedff',
            bio: 'Hello, my name is user, nice to meet you',
            website: 'https://user.com',
            location: 'Melbourne, Australia'
        }     
    ],
     screams: [
        {
            userHandle: 'user',
            body: 'this is the scream body',
            createdAt: '2020-12-30T06:28:30.146Z',
            likeCount: 5,
            commentCount: 2

        }
    ],
    comments: [
        {
            userHandle: 'user',
            screamId: '2axwTmPhlplR5jCJol1F',
            body: 'Nice one man!!',
            createdAt: '2021-01-09T13:01:48.244Z',
            createdAt: '2021-01-09T13:01:48.244Z' 
        }
    ], 

    notifications: [
        {
            recipient: 'user',
            sender: 'mike',
            read: 'true | false', 
            screamId: 'ljdklsajklsajkasjkas',
            type: 'like | comment';
            createdAt: '2021-01-09T13:01:48.244Z' 
        }
    ]
};
const userDetails = {
    //redux data 
    credentials: {
    userId: 'WJWKJ442KLJJ34J44PP444444SSHFNFN',
    email: 'user@email.com',
    handle: 'user',
    createdAt: '2021-01-09T13:01:48.244Z',
    imageUrl: 'image/abcdefgdgskkk/abcdfedff',
    bio: 'Hello, my name is user, nice to meet you',
    website: 'https://user.com',
    location: 'Melbourne, Australia'
},
likes: [
    {
        userHandle: 'user',
        screamId: 'hhhsjsdjsdsdksl87pp'
    },
    {
        userHandle: 'user',
        screamId: '35655jsdsdksl87pp'
    }
]
}
