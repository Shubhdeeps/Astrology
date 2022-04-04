import create from 'zustand' 

const signData = (set => ({
    data: {},
    setData: (product) => 
        set(() => ({ data: product }) ),
    
}));

const singleSign = (set => ({
    data: {},
    setData: (product) => 
        set(() => ({ data: product }) ),
    
}));


export const useLoading = create(set => ({
    loading: false,
    setFalse: () => set(() => ({
        loading: false
    })),
    setTrue: () => set(() => ({
        loading: true
    }))
}))
export const useSigns = create(set => ({
    signs: [
        "Aries",
        "Taurus",
        "Gemini",
        "Cancer",
        "Leo",
        "Virgo",
        'Libra',
        'Scorpio',
        'Sagittarius',
        'Capricorn',
        'Aquarius',
        'Pisces'
        ],
    signDate: [
        {Name: 'Aries', Date: 'March 21 – April 19'}, 
        {Name: 'Taurus', Date: "April 20 – May 20"},
        {Name: 'Gemini', Date: 'May 21 – June 20'},
        {Name: 'Cancer', Date: 'June 21 – July 22'},
        {Name: 'Leo', Date: 'July 23 – August 22'}, 
        {Name: 'Virgo', Date: "August 23 – September 22"},
        {Name: 'Libra', Date: 'September 23 – October 22'},
        {Name: 'Scorpio', Date: 'October 23 – November 21'},
        {Name: 'Sagittarius', Date: 'November 22 – December 21'}, 
        {Name: 'Capricorn', Date: "December 22 – January 19"},
        {Name: 'Aquarius', Date: 'January 20 – February 18'},
        {Name: 'Pisces', Date: 'February 19 – March 20'},]      
}))


export const useSignStore = create(signData);
export const useSingle = create(singleSign);

