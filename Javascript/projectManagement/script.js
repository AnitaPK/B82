let projectsAll = []
let countOnPage = 10
let totalNoOfPages
let currentPAge = 1
let pagesArray = []

async function fetchProjects() {
    await fetch('https://674e84f1635bad45618eebc1.mockapi.io/api/v1/projects')
        .then(res => res.json())
        .then(data => {
            projectsAll = data
            totalNoOfPages = projectsAll.length / countOnPage
            pagesArray = Array.from({ length: totalNoOfPages }, (_, i) => i + 1)
            console.log(pagesArray)
            filterProjectsByPage(1)
        })
        .catch(err => console.log(err))
}


document.addEventListener('DOMContentLoaded', () => {
    fetchProjects()

})

function renderData(projects, startIndex) {
    document.getElementById("projectsRows").innerHTML = projects.map((p, i) => `
               <tr>
      <td scope="col">${startIndex+i + 1}</td>
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

    console.log(pagesArray, "^^^^^^^^^^^^^^^^^")
    document.getElementById("paginationList").innerHTML = pagesArray.map((v, i) => `
   <li class="page-item"><button class="page-link" onclick="filterProjectsByPage(${i + 1})">${v}</button></li>
`).join('')
}

const searchKeyElmt = document.getElementById("searchKey")
const btnSearchElmt = document.getElementById("searchBTN")

btnSearchElmt.addEventListener('click', () => {
    const searchKEY = searchKeyElmt.value
    console.log(searchKEY)
    const filteredArray = projectsAll.filter((p) => {
        return p.ProjectName.toLowerCase().includes(searchKEY.toLowerCase()) ||
            p.Details.toLowerCase().includes(searchKEY.toLowerCase()) ||
            p.Department.toLowerCase().includes(searchKEY.toLowerCase())
    })
    renderData(filteredArray)

})

function filterByStatus() {
    statusFromUser = document.getElementById("selectStatus").value

    const fileteredArrayByStatus = projectsAll.filter((p) => {
        return p.status == statusFromUser
    })
    renderData(fileteredArrayByStatus)
}


function filterProjectsByPage(currentPAge) {
    startIndex = (currentPAge - 1) * countOnPage
    endIndex = startIndex + countOnPage
    console.log(startIndex, endIndex)
    console.log(projectsAll)
    proj10 = projectsAll.slice(startIndex, endIndex)
    console.log(proj10)
    renderData(proj10, startIndex)
}








// <li class="page-item"><a class="page-link" href="#">Previous</a></li>
//     <li class="page-item"><a class="page-link" href="#">1</a></li>
//     <li class="page-item"><a class="page-link" href="#">2</a></li>
//     <li class="page-item"><a class="page-link" href="#">3</a></li>
//     <li class="page-item"><a class="page-link" href="#">Next</a></li>