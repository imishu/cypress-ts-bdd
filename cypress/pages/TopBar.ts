class TopBar{
    elements = {
        userArea: () => cy.get(".oxd-topbar-header-userarea")
    };

    userAreaIsVisible(){
        this.elements.userArea().should("be.visible");
    }
}

export const topBar = new TopBar()