const Contact = () => {
   const contactList = document.createElement('ul')
   contactList.innerHTML = `
   <li class="contact__list-green"><a href="">Chat with us</a></li>
   <li class="contact__list"><a href="">+420 336 775 664</a></li>
   <li class="contact__list"><a href="">info@freshnesecom.com</a></li>
   `;
   return contactList.outerHTML
};
export default Contact();