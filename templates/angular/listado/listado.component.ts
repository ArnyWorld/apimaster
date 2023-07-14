import { Component, OnInit } from "@angular/core";
import { BsModalRef, BsModalService } from "ngx-bootstrap/modal";
import { {xnombrecapx}Service } from "src/app/core/services/{xnombrex}.service";
import { NotificacionService } from "src/app/core/services/notificacion.service";
{xrelations_includex}

type NewType = NotificacionService;

@Component({
  selector: "app-listado",
  templateUrl: "./listado.component.html",
  styleUrls: ["./listado.component.scss"],
})
export class ListadoComponent implements OnInit {
  modalRef?: BsModalRef;

  formato: any;
  dataEdit = null;
  titulo: any = "{xtitulox}";

  {xrelations_varx}

  constructor(
    public {xnombrecapx}Service: {xnombrecapx}Service,
    private modalService: BsModalService,
    private NotificacionService: NotificacionService
  ) {}

  ngOnInit(): void {
    this.formato = {
      cabeceras: {xcabecerasx}
    };
  }

  crear(data: any, template) {
    this.dataEdit = null;
    this.modalRef = this.modalService.show(template, {
      class: `modal-md modal-dialog-centered`,
    });
  }
  editar(data: any, template) {
    this.dataEdit = data;
    this.modalRef = this.modalService.show(template, {
      class: `modal-md modal-dialog-centered`,
    });
  }
  habilitar(data: any, component) {
    this.{xnombrecapx}Service.habilitar(data, data.id).subscribe(
      (data) => {
        component.obtenerDatos();
        this.NotificacionService.successStandar(
          "Registro habilitado exitosamente."
        );
      },
      (error) => {
        this.NotificacionService.alertError(error);
      }
    );
  }
  deshabilitar(data: any, component) {
    this.{xnombrecapx}Service.deshabilitar(data, data.id).subscribe(
      (data) => {
        component.obtenerDatos();
        this.NotificacionService.successStandar(
          "Registro deshabilitado exitosamente."
        );
      },
      (error) => {
        this.NotificacionService.alertError(error);
      }
    );
  }

  eliminar(data: any, component) {
    this.NotificacionService.alertaEliminacion(data.nombre, (response: any) => {
      if (response) {
        this.{xnombrecapx}Service.delete(data.id).subscribe(
          (data) => {
            component.obtenerDatos();
            this.NotificacionService.successStandar(
              "Registro eliminado exitosamente."
            );
          },
          (error) => {
            this.NotificacionService.alertError(error);
          }
        );
      }
    });
  }
}
