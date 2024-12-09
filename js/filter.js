
        // Função para filtrar as lutas com base na rede selecionada
        function filterFights(network) {
            // Obter todas as divs de lutas
            const fights = document.querySelectorAll('.fight-event');
            
            // Mostrar todas as lutas se for "ALL NETWORKS"
            if (network === "ALL NETWORKS") {
                fights.forEach(fight => {
                    fight.style.display = 'block'; // Exibe todas as lutas
                });
            } else {
                // Caso contrário, filtrar pelas redes específicas
                fights.forEach(fight => {
                    const organization = fight.getAttribute('data-organization');
                    if (organization === network) {
                        fight.style.display = 'block'; // Exibe lutas correspondentes
                    } else {
                        fight.style.display = 'none'; // Oculta lutas que não correspondem
                    }
                });
            }
            
            // Atualizar o estilo do botão ativo
            const buttons = document.querySelectorAll('.filter-btn');
            buttons.forEach(button => {
                if (button.textContent === network) {
                    button.classList.add('active');
                } else {
                    button.classList.remove('active');
                }
            });
        }