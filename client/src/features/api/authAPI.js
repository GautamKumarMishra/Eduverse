// import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
// import { userLoggedIn } from "../authSlice";

// // const baseUrl = "http://localhost:3000/api/v1/user/login";
// const baseUrl = "http://localhost:3000/api/v1/user";

// export const authApi = createApi({
//     reducerPath: "authApi",
//     baseQuery: fetchBaseQuery({
//         baseUrl : baseUrl,
//         credentials:'include',
//     }),
//     endpoints: (builder) =>({
        
//         registerUser : builder.mutation({
//             query: (inputData) =>({
//                 url: "register",
//                 method: "POST",
//                 body: inputData
//             })
//         }),
//         loginUser : builder.mutation({
//             query: (inputData) =>({
//                 url: "login",
//                 method: "POST",
//                 body: inputData
//             })
//         }),
        
//         async onQueryStarted(_, {queryFulfilled, dispatch}){
//             try{
//                 const result = await queryFulfilled
//                 dispatch(userLoggedIn({user: result.data.user}));
//             }
//             catch(error){
//                 console.log("Error in authAPI.js --> ",error);
//             }
//         }
//     })
// })

// export const {
//     useRegisterMutation,
//     useLoginMutation,
// } = authApi;






import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import { userLoggedIn, userLoggedOut } from "../authSlice";

const USER_API = "http://localhost:4000/api/v1/user/"

export const authApi = createApi({
    reducerPath:"authApi",
    baseQuery:fetchBaseQuery({
        baseUrl:USER_API,
        credentials:'include'
    }),
    
    //when we fetch data from API, we use query
    // when we post data , we use mutation
    endpoints: (builder) => ({
        registerUser: builder.mutation({
            query: (inputData) => ({
                url:"register",
                method:"POST",
                body:inputData
            })
        }),
        loginUser: builder.mutation({
            query: (inputData) => ({
                url:"login",
                method:"POST",
                body:inputData
            }),

        // A function called when any individual mutation started
            async onQueryStarted(_, {queryFulfilled, dispatch}) {
                try {
                    const result = await queryFulfilled;
                    dispatch(userLoggedIn({user:result.data.user}));
                } catch (error) {
                    console.log(error);
                }
            }
        }),
        // logoutUser: builder.mutation({
        //     query: () => ({
        //         url:"logout",
        //         method:"GET"
        //     }),
        //     async onQueryStarted(_, {queryFulfilled, dispatch}) {
        //         try { 
        //             dispatch(userLoggedOut());
        //         } catch (error) {
        //             console.log(error);
        //         }
        //     }
        // }),
        // loadUser: builder.query({
        //     query: () => ({
        //         url:"profile",
        //         method:"GET"
        //     }),
        // // A function called when any individual mutation started
        //     async onQueryStarted(_, {queryFulfilled, dispatch}) {
        //         try {
        //             const result = await queryFulfilled;
        //             dispatch(userLoggedIn({user:result.data.user}));
        //         } catch (error) {
        //             console.log(error);
        //         }
        //     }
        // }),
        // updateUser: builder.mutation({
        //     query: (formData) => ({
        //         url:"profile/update",
        //         method:"PUT",
        //         body:formData,
        //         credentials:"include"
        //     })
        // })
    })
});
export const {
    useRegisterUserMutation,
    useLoginUserMutation,
    // useLogoutUserMutation,
    // useLoadUserQuery,
    // useUpdateUserMutation
} = authApi;