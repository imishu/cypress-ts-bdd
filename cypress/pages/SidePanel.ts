class SidePanel{
    elements = {
        sidepanel: ()=> cy.get(".oxd-sidepanel")
    };

    sidePanelIsVisible(){
        this.elements.sidepanel().should("be.visible");
    }
}

export const sidePanel = new SidePanel();