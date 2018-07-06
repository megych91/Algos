class Cars:

    def __init__(self, price, speed, fuel, mileage, tax, package):

        self.price = price
        self.speed = speed
        self.fuel = fuel
        self.mileage = mileage
        self.tax = tax
        self.package = package

    def display_all(self):
            print(str(self.price) + " " + str(self.speed) + " " + str(self.fuel) + " " + str(self.mileage) + " " + str(package) + " " + str(tax))

    # def tax_increase(self):
    #         ### if self.price > 10000
    #           ### set self.tax to be 12%

car1 = Cars(2000, 35, 'full', 15, 0.12, 'sport')
car2 = (2000, 5, 'not full', 105, 0.12, 'premium')
car3 = (2000, 15, 'kind of full', 95, 0.12, 'sport')
car4 = (2000, 25, 'full', 25, 0.12, 'limited')
car5 = (2000, 45, 'empty', 25, 0.12, 'sport')
car6 = (2000000, 35, 'empty', 15, 0.12, 'sport')

print ("Price:", car1.price)