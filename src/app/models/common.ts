export interface Activity{
    id: string;
    title: string;
    description: string;
    milestonesToShow: Array<Milestone>;
}

export interface Milestone{
    id: string;
    title: string;
    badge: string;
    icon: string;
}

export interface GraphActivity {
    id: string;
    key_id: string; // id related to Activity entity
    connectors?: Array<string>;
    t: string; // this is the graph activity title
    dificulty: string;
    long_description?: string;
    game_important?: string;
    materials?: string;
    milestones: Array<GraphMilestone>;
    is_simplified_activity: boolean;
}

export interface GraphMilestone {
    title: string;
    icon?: string;
    optimal_scenario?: string;
    in_progress_scenario?: string;
    long_description?: string;
    feedback_question?: string;
    milestone_picture?: string;
    id: string;
    key_id: string;
    month: number;
}

export interface User{
    email: string;
    name: string;
    children:[Child];
}

export interface Child{
    childId: string;
    name: string;
    scoreBoard: Array<Score>
}

export interface Score{
    activityId: string; //graph activity Id
    points: number;
    month: number;
    createdAt: number;
}
