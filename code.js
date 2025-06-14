function cardprinter(user) {
  const article = document.createElement("article")
  article.name = "card"

  const basicdetail = document.createElement("section")
  basicdetail.name = "basicDetail"

  const header = document.createElement("header")
  const h3 = document.createElement("h3")
  h3.textContent = `Name: ${user.name}(${user.username})`
  header.appendChild(h3)
  basicdetail.appendChild(header)

  const email = document.createElement("p")
  email.textContent = `EMail: ${user.email}`
  basicdetail.appendChild(email)

  const ph = document.createElement("p")
  ph.textContent = `Phone: ${user.phone}`
  basicdetail.appendChild(ph)

  const adressDetail = document.createElement("section")
  adressDetail.name = "addressDetails"

  const street = document.createElement("p")
  street.textContent = `Street: ${user.address.street}`

  const cityP = document.createElement("p")
  cityP.textContent = `City: ${user.address.city}`

  const zipP = document.createElement("p")
  zipP.textContent = `Zipcode: ${user.address.zipcode}`

  const company2P = document.createElement("p")
  company2P.textContent = `Company: ${user.company.name}`

  addressSection.appendChild(street)
  addressSection.appendChild(cityP)
  addressSection.appendChild(zipP)
  addressSection.appendChild(company2P)

  article.appendChild(basicSection)
  article.appendChild(addressSection)

  document.getElementById("root").appendChild(article)

  
}

    
