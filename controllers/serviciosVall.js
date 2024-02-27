const { response } = require("express");

const RegistrarServicio = require("../models/serviciosVall");

const registrarServicioGet = async (req, res = response) => {
  const registrarServicios = await RegistrarServicio.find();

  res.json({
    registrarServicios,
  });
};
const registrarServicioPost = async (req, res) => {
  const body = req.body;
  let mensaje = "Registro de servicio creado.";

  try {
    const registrarServicio = new RegistrarServicio(body);
    await registrarServicio.save();
  } catch (error) {
    mensaje = "Problemas al crear un registro de Servicio.";
    console.log(error);
  }
  res.json({
    msg: mensaje,
  });

}
const registrarServicioPut = async (req, res) => {
  const { _id, nombre, precio, duracion_aproximada, descripcion} = req.body;
  let mensaje = "Modificación exitosa";

  try {
    await RegistrarServicio.findOneAndUpdate({ _id: _id }, { nombre: nombre, precio: precio, duracion_aproximada: duracion_aproximada, descripcion: descripcion});
  } catch (error) {
    mensaje = "Problemas al modificar";
    console.log(error);
  }
  res.json({
    msg: mensaje,
  });
};

const registrarServicioDelete = async (req, res = response) => {
  const { _id } = req.body;
  let mensaje = "Eliminación exitosa";
  try {
    await RegistrarServicio.deleteOne({ _id: _id });
  } catch (error) {
    mensaje = "Problemas al eliminar";
    console.log(error);
  }
  res.json({
    msg: mensaje,
  });
};

module.exports = { 
  registrarServicioGet, 
  registrarServicioPost, 
  registrarServicioPut, 
  registrarServicioDelete};