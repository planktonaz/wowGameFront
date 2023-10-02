import {createSlice} from "@reduxjs/toolkit";

export const varsSlice = createSlice({
    name: "vars",
    initialState: {
        heroes: [],
        currentUser: {},
        items: {
            weapon: {
                type: "weapon",
                image: "",
                weaponQuality: 0,
                weaponDamage: 0,
                weaponSlots: 0,
                weaponGold: 0,
                weaponEffects: 0,
            },
            armour: {
                type: "armour",
                image: "",
                armourQuality: 0,
                armourPower: 0,
                armourSlots: 0,
                armourEffects: 0,
            },
            potion: {
                type: "potion",
                image: "",
                potion: 0
            }
        },
        inventory: [],
        battleWeapon: {},
        battleArmour: {},
        battlePotion: {},
        battleUser1: {},
        battleUser2: {},
        arenaTimeRoomId: "",
        arenaTimeUsername: "",
        arenaTime: 0,
        arena: {}
    },
    reducers: {
        setHeroes: (state, action) => {
            state.heroes = action.payload
        },
        setUsername: (state, action) => {
            state.currentUser = action.payload
        },
        setItems: (state, action) => {
            state.items = action.payload
        },
        resetItems: (state, action) => {
            state.items = {
                weapon: {
                    type: "weapon",
                    image: "",
                    weaponQuality: 0,
                    weaponDamage: 0,
                    weaponSlots: 0,
                    weaponGold: 0,
                    weaponEffects: 0,
                },
                armour: {
                    type: "armour",
                    image: "",
                    armourQuality: 0,
                    armourPower: 0,
                    armourSlots: 0,
                    armourEffects: 0,
                },
                potion: {
                    type: "potion",
                    image: "",
                    potion: 0
                }
            }
        },
        resetInventory: (state, action) => {
            state.inventory = []
        },
        resetBattleItems: (state, action) => {
            state.battleWeapon = {}
            state.battleArmour = {}
            state.battlePotion = {}
        },
        resetCurrentUser: (state, action) => {
            state.currentUser = {}
        },
        addInventory: (state, action) => {
            state.inventory.push(action.payload)
        },
        setBattleWeapon: (state, action) => {
            state.battleWeapon = action.payload
        },
        setBattleArmour: (state, action) => {
            state.battleArmour = action.payload
        },
        setBattlePotion: (state, action) => {
            state.battlePotion = action.payload
        },
        setBattleUser1: (state, action) => {
            state.battleUser1 = action.payload
        },
        setBattleUser2: (state, action) => {
            state.battleUser2 = action.payload
        },
        setArenaTime: (state, action) => {
            state.arenaTime = action.payload
        },
        setArenaTimeRoomId: (state, action) => {
            state.arenaTimeRoomId = action.payload
        },
        setArenaTimeUsername: (state, action) => {
            state.arenaTimeUsername = action.payload
        },
    }
})

export const {
    setHeroes,
    setUsername,
    setItems,
    resetItems,
    resetInventory,
    resetBattleItems,
    resetCurrentUser,
    addInventory,
    setBattleWeapon,
    setBattleArmour,
    setBattlePotion,
    setBattleUser1,
    setBattleUser2,
    setArenaTimeUsername,
    setArenaTimeRoomId,
    setArenaTime,
} = varsSlice.actions

export default varsSlice.reducer;