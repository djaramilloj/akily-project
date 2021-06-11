import { Child, Activity, GraphActivity, Milestone, GraphMilestone } from "./common";

export const CHILDREN_MOCK: Array<Child> = [
    {
        childId: 'myChildId-12345',
        name: 'Juan Jaramillo',
        scoreBoard:[
            {
                activityId: 'a1',
                points: 10,
                month: 2,
                createdAt: new Date().getMilliseconds()
            },
            {
                activityId: 'a2',
                points: 9,
                month: 3,
                createdAt: new Date().getMilliseconds()
            },
            {
                activityId: 'a3',
                points: 8,
                month: 4,
                createdAt: new Date().getMilliseconds()
            },
        ]
    },
    {
        childId: 'myChildId-67890',
        name: 'Pedro Perez',
        scoreBoard:[
            {
                activityId: 'a1',
                points: 5,
                month: 5,
                createdAt: new Date().getMilliseconds()
            },
            {
                activityId: 'a2',
                points: 10,
                month: 6,
                createdAt: new Date().getMilliseconds()
            },
            {
                activityId: 'a3',
                points: 10,
                month: 7,
                createdAt: new Date().getMilliseconds()
            },
        ]
    }
];

export const MILESTONES_MOCK: Array<Milestone> = [
    {
        id: '1',
        title: 'This is milestone 1 for activity 1',
        badge: 'badge milestone 1',
        icon: '../../../assets/anatomia.png'
    },
    {
        id: '2',
        title: 'This is milestone 2 for activity 1',
        badge: 'badge milestone 2',
        icon: '../../../assets/atomo.png'
    },
    {
        id: '3',
        title: 'This is milestone 1 for activity 2',
        badge: 'badge milestone 1b',
        icon: '../../../assets/cerebro.png'
    },
    {
        id: '4',
        title: 'This is milestone 2 for activity 2',
        badge: 'badge milestone 2b',
        icon: '../../../assets/pizarra.png'
    },
    {
        id: '5',
        title: 'This is milestone 1 for activity 3',
        badge: 'badge milestone 1c',
        icon: '../../../assets/anatomia.png'
    }
];

export const ACTIVITIES_MOCK: Array<Activity> = [
    {
        id: '1',
        title: 'This is activity #1',
        description: 'This activity is amazing and your child will learn a lot about Math',
        milestonesToShow:[]
    },
    {
        id: '2',
        title: 'This is activity #2',
        description: 'This activity is amazing and your child will learn a lot about Biology',
        milestonesToShow:[]
    },
    {
        id: '3',
        title: 'This is activity #3',
        description: 'This activity is amazing and your child will learn a lot about Science',
        milestonesToShow:[]
    },
];

export const GRAPH_MILESTONE_MOCK: Array<GraphMilestone> = [
    {
        title: 'Milestone #1',
        id: 'm1',
        key_id: '1',
        month: 2,
    },
    {
        title: 'Milestone #2',
        id: 'm2',
        key_id: '2',
        month: 3,
    },
    {
        title: 'Milestone #3',
        id: 'm3',
        key_id: '3',
        month: 4,
    },
    {
        title: 'Milestone #4',
        id: 'm4',
        key_id: '4',
        month: 5,
    },
    {
        title: 'Milestone #5',
        id: 'm5',
        key_id: '5',
        month: 6,
    },
];

export const GRAPH_ACTIVITY_MOCK: Array<GraphActivity> = [
    {
        id: 'a1',
        key_id: '1',
        t: 'graph activity #1',
        dificulty: 'easy',
        milestones: GRAPH_MILESTONE_MOCK.filter(item => item.id === 'm1' || item.id === 'm2'),
        is_simplified_activity: false
    },
    {
        id: 'a2',
        key_id: '2',
        t: 'graph activity #2',
        dificulty: 'hard',
        milestones: GRAPH_MILESTONE_MOCK.filter(item => item.id === 'm3' || item.id === 'm4'),
        is_simplified_activity: true
    },
    {
        id: 'a3',
        key_id: '3',
        t: 'graph activity #3',
        dificulty: 'medium',
        milestones: GRAPH_MILESTONE_MOCK.filter(item => item.id === 'm5'),
        is_simplified_activity: true
    }
];
