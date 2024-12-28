import { writable } from "svelte/store";

interface InvaderInPlay {
    activeCards: string[];
    faceDownCards: string[];
}

interface InvaderStore {
    // State set before during configuration
    activeExpansions: string[];
    isUsingBlightCard: boolean;
    isUsingEvents: boolean;
    isUsingAdversaries: boolean;
    isUsingScenarios: boolean;
    numberOfSpirits: number;
    leadingAdversary: string;
    supportingAdversary: string;
    leadingAdversaryLevel: number;
    supportingAdversaryLevel: number;


    // State established during setup
    blightCard: string;
    invaderDeck: string[];
    eventDeck: string[];
    fearDeck: string[];
    
    // State that changes during the game
    turn: number;
    nextInvaderCardIndex: number;
    nextEventCardIndex: number;
    nextFearCardIndex: number;
    generatedFear: number;
    eventDiscard: string[];
    fearDiscard: string[];
    invaderDiscard: string[];
    invaderInPlay: InvaderInPlay[];
    isBlightedIsland: boolean;
    blightOnCard: number;
    blightDiscard: string[];
    terrorLevel: number;
}

const initialState: InvaderStore = {
    activeExpansions: [],
    isUsingBlightCard: false,
    isUsingEvents: false,
    isUsingAdversaries: false,
    isUsingScenarios: false,
    numberOfSpirits: 0,
    leadingAdversary: "",
    supportingAdversary: "",
    leadingAdversaryLevel: 0,
    supportingAdversaryLevel: 0,
    blightCard: "",
    invaderDeck: [],
    eventDeck: [],
    fearDeck: [],
    turn: 0,
    nextInvaderCardIndex: 0,
    nextEventCardIndex: 0,
    nextFearCardIndex: 0,
    generatedFear: 0,
    eventDiscard: [],
    fearDiscard: [],
    invaderDiscard: [],
    invaderInPlay: [],
    isBlightedIsland: false,
    blightOnCard: 0,
    blightDiscard: [],
    terrorLevel: 0
};

const {subscribe, set, update} = writable(initialState);

// Methods to update the state
function setConfiguration(config: Partial<InvaderStore>) {
    update(state => ({ ...state, ...config }));
}

function updateGameState(updates: Partial<InvaderStore>) {
    update(state => ({ ...state, ...updates }));
}

export const invaderStore = {
    subscribe,
    setConfiguration,
    updateGameState,
    reset: () => set(initialState)
};