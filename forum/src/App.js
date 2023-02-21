import {
    createBrowserRouter, 
    createRoutesFromElements,
    Route, 
    RouterProvider,
  } from 'react-router-dom'
  
  // pages
  import HomePage from './routes/Home-Page/HomePage'
  import SignInPage from './routes/Sign-In-Page/SignInPage'
  import SignUpPage from './routes/Sign-Up-Page/SignUpPage'
  import PostPage from './routes/Post-Page/PostPage'
  import CreatePost from './routes/Create-Post/CreatePost'

  // layouts
  import RootLayout from './layouts/RootLayer/RootLayout'
  import MainLayout, { checkMain } from './layouts/MainLayout/MainLayout'
  // loaders
  import { postsLoader } from './routes/Home-Page/HomePage'
  import { checkAuth } from './layouts/RootLayer/RootLayout'
  
 
   const router = createBrowserRouter(
    createRoutesFromElements(

      <Route element={<RootLayout />} id="root">
          <Route path="/" element={<MainLayout />} loader={checkMain}>
              <Route index 
                element={<HomePage />}
                loader={postsLoader}
              />
              <Route path="createpost" element={<CreatePost />}/>
              <Route path="posts" element={<PostPage />}/>
          </Route>
        <Route path="signin" element={<SignInPage/>}/>
        <Route path="signup" element={<SignUpPage/>}/>
      
      </Route>
        
        /* <Route path="posts" element={<Posts />}/>
        <Route path="createpost" element={<CreatePost/>}/>
        <Route path="signin" element={<SignIn />}/>
        <Route path="signup" element={<SignUp/>}/> */
        
        /* <Route path="careers" element={<CareersLayout />} errorElement={<CareersError />}>
          <Route 
            index 
            element={<Careers />} 
            loader={careersLoader}
            // errorElement={<CareersError />}
          />
          <Route 
            path=":id" 
            element={<CareerDetails />}
            loader={careerDetailsLoader}
          />
        </Route>
   */
        /* <Route path="*" element={<NotFound />} /> */
        
        
      
    )
  )
  
  function App() {
    return (
      <RouterProvider router={router} />
    );
  }
  
  export default App