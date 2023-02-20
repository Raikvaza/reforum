import {
    createBrowserRouter, 
    createRoutesFromElements,
    Route, 
    RouterProvider
  } from 'react-router-dom'
  
  // pages
  import HomePage from './routes/Home-Page/HomePage'
  // layouts
  import RootLayout from './layouts/RootLayout'
//   import HelpLayout from './layouts/HelpLayout'
//   import CareersLayout from './layouts/CareersLayout'
  
  const router = createBrowserRouter(
    createRoutesFromElements(

      <Route path="/" element={<RootLayout />}>
        <Route index element={<HomePage />} />
        {/* <Route path="posts" element={<Posts />}/>
        <Route path="createpost" element={<CreatePost/>}/>
        <Route path="signin" element={<SignIn />}/>
        <Route path="signup" element={<SignUp/>}/> */}
        
        {/* <Route path="careers" element={<CareersLayout />} errorElement={<CareersError />}>
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
   */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Route>
    )
  )
  
  function App() {
    return (
      <RouterProvider router={router} />
    );
  }
  
  export default App