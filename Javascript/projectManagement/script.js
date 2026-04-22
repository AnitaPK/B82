let projectsAll = []

async function fetchProjects(){
    await fetch('https://674e84f1635bad45618eebc1.mockapi.io/api/v1/projects')
    .then(res=>res.json())
    .then(data=>{
        projectsAll = data
        renderData(data)
})
    .catch(err=>console.log(err))
}   


document.addEventListener('DOMContentLoaded',()=>{
    fetchProjects()
})

function renderData(projects){
    document.getElementById("projectsRows").innerHTML = projects.map((p,i)=>`
               <tr>
      <td scope="col">${i+1}</td>
      <td scope="col">${p.ProjectName}
      <br/>
      <i>${p.Details} </i>
      </td>
      <td scope="col">${p.Department}</td>
      <td scope="col">${p.priority}</td>
      <td scope="col">${p.status}</td>
      <td scope="col">${p.startDate}</td>
      <td scope="col">${p.EndDate}</td>
    </tr>                          
    `).join('')
}

const searchKeyElmt = document.getElementById("searchKey")
const btnSearchElmt = document.getElementById("searchBTN")

 btnSearchElmt.addEventListener('click',()=>{
   const  searchKEY = searchKeyElmt.value
   console.log(searchKEY)
   const filteredArray = projectsAll.filter((p)=>{
      return  p.ProjectName.toLowerCase().includes(searchKEY.toLowerCase()) ||
              p.Details.toLowerCase().includes(searchKEY.toLowerCase()) ||
              p.Department.toLowerCase().includes(searchKEY.toLowease())
    })



renderData(filteredArray)
})


