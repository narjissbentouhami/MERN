
const LivreList = ({ livre }) => {
    const { id,title, description, image } = livre;
  
  
    
    return(
        <div class="col-lg-3 col-md-4 col-sm-6 mix fresh-meat vegetables">
              <div class="featured__item">
                <img  src={image} alt="" />
                <div class="featured__item__text">
                  <h6>
                    <a href="#">{title}</a>
                  </h6>
                  <h5>{description}</h5>
                  <button class="btn" ><i class="fa fa-trash"></i></button>
                </div>
              </div>
            </div>
              
    )
  }
  export default LivreList;