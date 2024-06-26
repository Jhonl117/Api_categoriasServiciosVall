const { response } = require("express");

const RegistrarCategoria = require("../models/categoriasVall");

const registrarCategoriaGet = async (req, res = response) => {
  const registrarCategorias = await RegistrarCategoria.find();

  res.json({
    registrarCategorias,
  });
};
const registrarCategoriaPost = async (req, res) => {
  const body = req.body;
  let mensaje = "Registro de Categoria creado.";

  try {
    const registrarCategoria = new RegistrarCategoria(body);
    await registrarCategoria.save();
  } catch (error) {
    mensaje = "Problemas al crear un registro de Categoria.";
    console.log(error);
  }
  res.json({
    msg: mensaje,
  });

}
const registrarCategoriaPut = async (req, res) => {
  const { _id, nombre, descripcion, estado, observaciones, IVA, codigoCategoria } = req.body;
  let mensaje = "Modificación exitosa";

  try {
    await RegistrarCategoria.findOneAndUpdate({ _id: _id }, { nombre: nombre, descripcion: descripcion, estado: estado , observaciones: observaciones,IVA: IVA, codigoCategoria: codigoCategoria});
  } catch (error) {
    mensaje = "Problemas al modificar";
    console.log(error);
  }
  res.json({
    msg: mensaje,
  });
};

const registrarCategoriaDelete = async (req, res = response) => {
  const { _id } = req.body;
  let mensaje = "Eliminación exitosa";
  try {
    await RegistrarCategoria.deleteOne({ _id: _id });
  } catch (error) {
    mensaje = "Problemas al eliminar";
    console.log(error);
  }
  res.json({
    msg: mensaje,
  });
};

module.exports = { 
  registrarCategoriaGet, 
  registrarCategoriaPost, 
  registrarCategoriaPut, 
  registrarCategoriaDelete };