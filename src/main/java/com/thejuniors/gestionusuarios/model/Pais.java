package com.thejuniors.gestionusuarios.model;

public class Pais {
    
    private Integer paisID;
    private String paisNombre;

    public Pais(Integer paisID, String paisNombre) {
        this.paisID = paisID;
        this.paisNombre = paisNombre;
    }

    public Integer getPaisID() {
        return paisID;
    }

    public void setPaisID(Integer paisID) {
        this.paisID = paisID;
    }

    public String getPaisNombre() {
        return paisNombre;
    }

    public void setPaisNombre(String paisNombre) {
        this.paisNombre = paisNombre;
    }

}
