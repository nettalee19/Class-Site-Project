<Switch>

          <Route exact path='/' component={Main}>
            {/* <Main/> */}
            {/* <Second/> */}
            
          </Route>

          <Route exact path='/lessons' component={Lesson}>
            {/* <Lesson/> */}
          </Route>

          {/* <Route exact path='/' component={Lesson} />
          <Route exact path='/' component={Teacher} /> */}
          
          <Route exact path='/loginTeachers' component={LoginTeachers}>
            
          </Route>

          <Route exact path='/loginTeachers/me' component={Teacher}>
            {/* <Teacher/> */}
          </Route>


          <Route exact path='/loginTeachers/me/addNewLesson' component={AddNewLesson}>
            {/* <AddNewLesson/> */}
          </Route>

          {/* <Route exact path='/loginTeachers/me/editLesson'>
              <EditLesson/>
           </Route> */}

          {/* <Route exact path='/'>
            <LoginStu/>
          </Route> */}


        </Switch>












{/* <Route exact path='/' component={Header} /> */}
<Header/>
      
<Switch>

  <Route exact path='/' component={Main}>
    {/* <Main/> */}
    {/* <Second/> */}
    
  </Route>

  <Route exact path='/lessons' component={Lesson}>
    {/* <Lesson/> */}
  </Route>

  {/* <Route exact path='/' component={Lesson} />
  <Route exact path='/' component={Teacher} /> */}
  
  <Route exact path='/loginTeachers' component={LoginTeachers}>
    
  </Route>

  <Route exact path='/loginTeachers/me' component={Teacher}>
    {/* <Teacher/> */}
  </Route>


  <Route exact path='/loginTeachers/me/addNewLesson' component={AddNewLesson}>
    {/* <AddNewLesson/> */}
  </Route>

  {/* <Route exact path='/loginTeachers/me/editLesson'>
      <EditLesson/>
   </Route> */}

  {/* <Route exact path='/'>
    <LoginStu/>
  </Route> */}


</Switch>



<Footer/>
{/* {`Hello ${user}`} */}


</div>