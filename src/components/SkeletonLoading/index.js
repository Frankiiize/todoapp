import React from "react";

function ErrorState ({error}) {
  return (
    <div className="skeletonContainer">
      <p className="skeletonContainer__errorState">Ocurio un Error</p>
    </div>
  );
}

function LoadingState () {
  return (
    <div className="skeletonContainer">
      <div className="skeletonContainer__background">
          <i></i>
          <p>. . .Estamos cargando</p>
      </div> 
    </div>
  );
}

function EmpyState () {
  return (
    <div className="skeletonContainer">
      <div className="skeletonContainer__empyState">
        <p>Crea tu primer TODO</p>
      </div>
    </div>
  );

}

export { ErrorState, LoadingState, EmpyState }; 

